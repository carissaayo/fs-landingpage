import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import SoldRow from "./SoldRow";
import { useTransactionsStore } from "../../store/user/transactionsStore";

const SoldTable = () => {
  const transactions = useTransactionsStore((state) => state.transactions);
  return (
    <ScrollArea className="w-full ">
      <Table className=" min-w-[800px]   mb-4">
        <TableHeader>
          <TableRow className="bg-[#F3F3F3] text-black">
            <TableHead className="text-black">Name/Device</TableHead>
            <TableHead className="text-black">Date</TableHead>
            <TableHead className="text-black">Amount</TableHead>
            <TableHead className="text-black">Status</TableHead>
            <TableHead className="text-black pl-12">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length > 0 &&
            transactions.map((transaction) => (
              <SoldRow key={transaction._id} transaction={transaction} />
            ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default SoldTable;
