# Adapted from https://whitfin.io/speeding-up-rust-docker-builds/
FROM rust:1.26.2 AS builder

RUN USER=root cargo new --bin go-rust
WORKDIR /go-rust

# Copies over *only* your manifests
COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

# Builds your dependencies and removes the
# fake source code from the dummy project
RUN cargo build # just a demo, so optimized for compile time
RUN rm src/*.rs
run rm target/debug/go-rust

# Copies only your actual source code to
# avoid invalidating the cache at all
COPY ./src ./src

# Builds again, this time it'll just be
# your actual source files being built
RUN cargo build # just a demo, so optimized for compile time

# Create a new stage with a minimal image
# because we already have a binary built
FROM debian:jessie-slim

WORKDIR /go-react-demo

# Copies the binary from the "build" stage to the current stage
COPY --from=builder /go-rust/target/debug/go-rust .

# Copies the static assets

COPY ./static ./static

# Configures the startup!
EXPOSE 8080
CMD ["./go-rust"]
