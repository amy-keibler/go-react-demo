extern crate actix_web;
#[macro_use]
extern crate serde_derive;
extern crate rand;
extern crate serde;
extern crate serde_json;

use actix_web::{fs, http::Method, server, App, HttpRequest, Json, Result};
use rand::prelude::random;

fn index(_req: HttpRequest) -> Result<fs::NamedFile> {
    Ok(fs::NamedFile::open("./static/index.html")?)
}

#[derive(Serialize)]
struct ApiInfo {
    served_by: String,
    number: u8,
}

fn api(_req: HttpRequest) -> Result<Json<ApiInfo>> {
    Ok(Json(ApiInfo {
        served_by: String::from("Rust"),
        number: random(),
    }))
}

fn main() {
    println!("Demo server running");
    server::new(|| {
        App::new()
            .resource("/", |r| r.method(Method::GET).f(index))
            .resource("/api/v1/info", |r| r.method(Method::GET).f(api))
            .handler("/scripts", fs::StaticFiles::new("./static"))
    }).bind("0.0.0.0:8080")
        .unwrap()
        .run();
}
