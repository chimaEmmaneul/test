import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Image from "next/image";
import { NewUser, column, row } from "@/types/type";
import React from "react";
import Logo from "@/assets/Logo1.svg";

type TableProps = {
  columns: NewUser[] | undefined;
  rows: row[];
  openModal?: () => void;

  setSingleRow?: React.Dispatch<React.SetStateAction<object>>;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal?: boolean;
};

export function TableComponent({ rows, columns }: TableProps) {
  //   const getData = (column: object) => {
  //     if (column) {
  //       setSingleRow?.(column);
  //     }
  //   };

  const renderCell = React.useCallback((column: column, columnKey: any) => {
    // const cellValue = column[columnKey as keyof column[]];

    switch (columnKey) {
      case "campaign":
        return (
          <div className="flex gap-4 items-center">
            <Image
              src={column.logo}
              alt={column.name}
              height={40}
              width={40}
              className="rounded-[50%]"
            />
            <div>
              <p className="text-[#21272A] font-bold capitalize">
                {column.campaign}
              </p>
              <p className="text-[10px]">{column.type}</p>
            </div>
          </div>
        );
      case "value":
        return <p className="text-green-400">{`$${column.value}`}</p>;

      default:
        return column[columnKey];
    }
  }, []);

  return (
    <div className="mt-2  ">
      <Table
        removeWrapper
        aria-label="Example table with dynamic content"
        className="overflow-x-auto pb-5 max-w-[15rem] min-w-full"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column?.key}
              style={{ overflowX: "auto" }}
              className="text-start  border-b-[#EFEFEF] border-b bborder-solid text-[#949494] text-[12px] font-medium py-3 px-2 ml-1"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={rows}
          emptyContent={"You haven't create any staff yet."}
        >
          {/* <TableBody emptyContent={"No rows to display."}>{[]}</TableBody> */}
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell
                  className="text-[#949494] text-xs sm:text-sm border-b px-2 "
                  //   style={{ overflowX: "auto" }}
                >
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
