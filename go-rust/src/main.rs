extern crate actix_web;
#[macro_use]
extern crate serde_derive;
extern crate rand;
extern crate serde;
extern crate serde_json;

use actix_web::{fs, http::Method, server, App, HttpRequest, Json, Result};
use rand::prelude::random;

fn index<'r>(_req: &'r HttpRequest) -> Result<fs::NamedFile> {
    Ok(fs::NamedFile::open("./static/index.html")?)
}

#[derive(Serialize)]
struct ApiInfo {
    served_by: &'static str,
    number: u8,
}

fn api<'r>(_req: &'r HttpRequest) -> Result<Json<ApiInfo>> {
    Ok(Json(ApiInfo {
        served_by: "Rust",
        number: random(),
    }))
}

#[derive(Serialize)]
struct SiegeRating {
    rating: u8,
    review: &'static str,
    valid: bool,
}

fn rate<'r>(req: &'r HttpRequest) -> Result<Json<SiegeRating>> {
    let rating: SiegeRating = req.match_info()
        .get("siege_weapon")
        .map(|sw| match sw {
            "trebuchet" => SiegeRating {
                rating: 10,
                review: "The superior siege weapon",
                valid: true,
            },
            "catapult" => SiegeRating {
                rating: 5,
                review: "A strictly worse trebuchet",
                valid: true,
            },
            "battering ram" => SiegeRating {
                rating: 1,
                review: "Your grand plan is to use a glorified tree as a siege weapon?",
                valid: true,
            },
            "ballista" => SiegeRating {
                rating: 2,
                review: "This is not a crossbow rating API. Cool crossbow though.",
                valid: true,
            },
            "helepolis" => SiegeRating {
                rating: 3,
                review: "Are you sure this isn't a droid transport ship? Either way, seems bad.",
                valid: true,
            },
            _ => SiegeRating {
                rating: 0,
                review: "Not a valid medieval siege weapon",
                valid: false,
            },
        })
        .unwrap_or(SiegeRating {
            rating: 0,
            review: "No weapon provided",
            valid: false,
        });
    Ok(Json(rating))
}

fn main() {
    println!("Demo server running");
    server::new(|| {
        App::new()
            .resource("/", |r| r.method(Method::GET).f(index))
            .resource("/rate/{siege_weapon}", |r| r.method(Method::GET).f(rate))
            .resource("/api/v1/info", |r| r.method(Method::GET).f(api))
            .handler(
                "/scripts",
                fs::StaticFiles::new("./static")
                    .expect("Failed to configure static content folder"),
            )
    }).bind("0.0.0.0:8080")
        .unwrap()
        .run();
}
