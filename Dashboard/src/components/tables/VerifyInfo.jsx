import { Card, Typography, button } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Name", "email","Location", "Guest","Price","Verify"];
 
const TABLE_ROWS = [
  {
    name: "Shyam",
    email: "shyam@gmail.com",
    location: "gandhinagar",
    guest: "2",
    price: "1000",
    verify: <button><a className="bg-blue-500 py-3 px-4 rounded" href="public\assets\pdf\Certi by be10X.pdf">Verify</a></button>,
},
  {
    name: "Shyam",
    email: "shyam@gmail.com",
    location: "gandhinagar",
    guest: "2",
    price: "1000",
    verify: <button><a className="bg-blue-500 py-3 px-4 rounded" href="public\assets\pdf\Certi by be10X.pdf">Verify</a></button>,
  },
  {
    name: "Shyam",
    email: "shyam@gmail.com",
    location: "gandhinagar",
    guest: "2",
    price: "1000",
    verify: <button><a className="bg-blue-500 py-3 px-4 rounded" href="public\assets\pdf\Certi by be10X.pdf">Verify</a></button>,
  },
  {
    name: "Shyam",
    email: "shyam@gmail.com",
    location: "gandhinagar",
    guest: "2",
    price: "1000",
    verify: <button><a className="bg-blue-500 py-3 px-4 rounded" href="public\assets\pdf\Certi by be10X.pdf">Verify</a></button>,
  },
  {
    name: "Shyam",
    email: "shyam@gmail.com",
    location: "gandhinagar",
    guest: "2",
    price: "1000",
    verify: <button><a className="bg-blue-500 py-3 px-4 rounded" href="public\assets\pdf\Certi by be10X.pdf">Verify</a></button>,
  },
];
 
export function VerifyInfo() {
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
          {TABLE_ROWS.map(({ name, email, location, guest,price,verify }, index) => {
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
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {location}
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {guest}
                  </Typography>
                  </td>
                  <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                  </td>
                  <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {verify}
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