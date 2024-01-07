import { HiTrash } from "react-icons/hi2";
import EmptyStage from "./EmptyStage";
import { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const Table = () => {
  const { records, removeRecord,updateRecord } = useContext(GeneralContext);

  return (
    <div>
      <table className=" w-full border border-black text-sm mb-4">
        <thead>
          <tr className=" border-b border-b-black">
            <th className=" tbl-head ">No</th>
            <th className=" tbl-head">Product Name</th>
            <th className=" tbl-head text-end">Unit Price</th>
            <th className=" tbl-head text-end">Quantity</th>
            <th className=" tbl-head text-end">Cost</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <EmptyStage />
            </tr>
          ) : (
            <>
              {records.map((record, index) => {
                return (
                  <tr key={record.id} className="group odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="tbl-head">{index + 1}</td>
                    <td className="tbl-head whitespace-nowrap">{record.name}</td>
                    <td className="tbl- text-end">{record.price}</td>
                    <td className="tbl-head text-end">
                      <button onClick={()=> record.quantity>0 && updateRecord(record.id,-1)} className="q-sub btn-circle ">-</button>
                      <span className="mx-2">{record.quantity}</span>
                      <button onClick={()=>updateRecord(record.id,1)} className="q-add btn-circle ">+</button>
                    </td>
                    <td className="tbl-head text-end">
                      {record.cost.toFixed(2)}
                      <button
                        onClick={() => removeRecord(record.id)}
                        className="btn-circle ml-2"
                      >
                        <HiTrash className="mx-auto"/>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
        <tfoot>
          {records.length > 0 && (
            <tr>
              <td className="tbl-head text-center" colSpan="4">
                Total
              </td>
              <td className="tbl-head text-end">
                {records.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
