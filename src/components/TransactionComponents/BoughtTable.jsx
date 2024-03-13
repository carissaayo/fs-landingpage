import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import BoughtRow from "./BoughtRow";

const BoughtTable = () => {
  return (
    <ScrollArea className="w-full ">
      <Table className="min-w-[800px] mb-4">
        <TableHeader>
          <TableRow className="bg-[#F3F3F3] text-black">
            <TableHead className="text-black">Name/Device</TableHead>
            <TableHead className="text-black">Date</TableHead>
            <TableHead className="text-black">Amount</TableHead>
            <TableHead className="text-black">Status</TableHead>
            <TableHead className="text-black">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <BoughtRow />
          <BoughtRow />
          <BoughtRow />
          <BoughtRow />
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default BoughtTable;
