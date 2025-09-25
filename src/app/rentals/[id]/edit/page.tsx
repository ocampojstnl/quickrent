import { getRental, updateRental } from "../../rental.actions";

export default async function EditRentalPage({
  params,
}: {
  params: { id: string };
}) {
  const rental = await getRental(params.id);

  if (!rental) return <div>Not found</div>;

  return (
    <div>
      <h1>Edit Rental</h1>
      <form action={(formData) => updateRental(rental.id, formData)}>
        <input name="name" defaultValue={rental.name} required />
        <textarea name="description" defaultValue={rental.description || ""} />
        <input name="category" defaultValue={rental.category} required />
        <input name="address" defaultValue={rental.address} required />
        <input name="size" type="number" defaultValue={rental.size} required />
        <input
          name="bathroom"
          type="number"
          defaultValue={rental.bathroom}
          required
        />
        <input
          name="bedroom"
          type="number"
          defaultValue={rental.bedroom}
          required
        />
        <input name="price" type="number" defaultValue={rental.price} required />

        {/* Show current images */}
        <div>
          <p>Current Images:</p>
          {rental.imageUrls.map((url, i) => (
            <img key={i} src={url} alt="rental" width={100} />
          ))}
        </div>

        {/* New upload field */}
        <input type="file" name="images" multiple accept="image/*" />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
