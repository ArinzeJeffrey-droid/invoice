import { Invoice } from "@/__types__/invoice";
import { Modal } from "@/components/modal";
import InvoiceDetailsHeader from "./invoice-details-header";
import Reminders from "./reminders";
import Details from "./details";
import InvoiceActivityItem from "../invoice-activity-item";
import { invoiceActivity } from "@/invoiceData";

interface InvoiceDetailsModalProps {
  open: boolean;
  onOpenChange(open: boolean): void;
  invoice: Invoice | undefined;
}

const InvoiceDetailsModal = ({
  open,
  onOpenChange,
  invoice,
}: InvoiceDetailsModalProps) => {
  return (
    <Modal
      className="w-[calc(100vw-20px)]"
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="p-6">
        <InvoiceDetailsHeader invoice={invoice as Invoice} />
        <Reminders />

        <div className="flex flex-col md:flex-row gap-14">
          <Details invoice={invoice as Invoice} />

          <div className="md:w-[40%]">
            <p className="text-[#1F1F23] font-black text-xl mb-6">
              Invoice Activity
            </p>

            {Array(4)
              .fill(invoiceActivity)
              .map((invoiceActivity) => (
                <InvoiceActivityItem
                  key={invoiceActivity.title}
                  activity={invoiceActivity}
                  showDivider
                />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceDetailsModal;
