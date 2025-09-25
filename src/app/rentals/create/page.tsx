import { createRental } from "../rental.actions";

export default function CreateRentalPage() {
  return (
    <div>
      <h1>Create Rental</h1>
      <form action={createRental}>
        <input name="name" placeholder="Name" required />
        <textarea name="description" placeholder="Description" />
        <input name="category" placeholder="Category" required />
        <input name="address" placeholder="Address" required />
        <input name="size" type="number" placeholder="Size" required />
        <input name="bathroom" type="number" placeholder="Bathrooms" required />
        <input name="bedroom" type="number" placeholder="Bedrooms" required />
        <input name="price" type="number" placeholder="Price" required />
        <input type="file" name="images" multiple accept="image/*" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
