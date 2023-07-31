import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns 404 if the ticket not found", async () => {
  const id = new mongoose.Types.ObjectId();

  await request(app).get(`/api/tickets/${id}`).send().expect(404);
});

it("returns a ticket if the ticket is found", async () => {
  const title = "ticket1";
  const price = 10;

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title,
      price,
    })
    .expect(201);

  const ticket = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticket.body.title).toEqual(title);
  expect(ticket.body.price).toEqual(price);
});
