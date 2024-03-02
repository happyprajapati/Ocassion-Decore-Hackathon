import { Card, Typography, button } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Type", "State","City", "Address","Name","Capacity","Decoration","Catering", "Price","Image","Adhaar","Property","Bank","Accept","Reject"];
 
const TABLE_ROWS = [
  {
    type: "Hotel",
    state: "Gujarat",
    city: "Ahmedabad",
    address: "Ahmedabad",
    name: "Shyam",
    capacity: "2",
    decoration: "Yes",
    catering: "Yes",
    price: "1000",
    image: <button><a className="bg-blue-500 py-3 px-4 rounded" href="/assets/pdf/Certification.pdf">View</a></button>,
    adhaar: <button><a className="bg-blue-500 py-3 px-4 rounded" href="/assets/pdf/Certification.pdf">View</a></button>,
    property: <button><a className="bg-blue-500 py-3 px-4 rounded" href="/assets/pdf/Certification.pdf">View</a></button>,
    bank: <button><a className="bg-blue-500 py-3 px-4 rounded" href="/assets/pdf/Certification.pdf">View</a></button>,
    accept: <button className="bg-blue-500 py-3 px-4 rounded">Accept</button>,
    reject: <button className="bg-blue-500 py-3 px-4 rounded">Reject</button>,
  },

];
 
export function VerifyTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ type, state, city, address, name, capacity, decoration, catering, price, image, adhaar, property, bank,accept, reject}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}
              className="border-b">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {state}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {city}
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {address}
                  </Typography>
                  </td>
                  <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                  </td>
                  <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {capacity}
                  </Typography>
                </td>

                  <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {decoration}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {catering}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {image}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {adhaar}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {property}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {bank}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {accept}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {reject}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}