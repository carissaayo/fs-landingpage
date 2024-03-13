import { TableCell, TableRow } from "../ui/table";

import phoneImg from "../../assets/images/gadget.png";
import { Button } from "../ui/button";

const SoldRow = () => {
  return (
    <TableRow>
      <TableCell className="">
        <div className="flex items-center gap-2">
          <img src={phoneImg} alt="" className="w-[100px]" />
          <p className="poppins-medium">Redmi Note 9s</p>
        </div>
      </TableCell>
      <TableCell>01 March 2024</TableCell>
      <TableCell>₦301,490</TableCell>
      <TableCell className="text-green-600">Completed</TableCell>
      <TableCell className="">
        <Button variant="outline" className="border-[#C8C8C8] rounded-xl">
          {" "}
          Details
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SoldRow;
