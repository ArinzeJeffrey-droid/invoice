import { InvoiceActivity } from "@/__types__/invoice";
import avatarImg from "@/public/images/avatar.png";
import Image from "next/image";

interface InvoiceActivityItemProps {
  activity: InvoiceActivity;
}

const InvoiceActivityItem = ({ activity }: InvoiceActivityItemProps) => {
  return (
    <section className="flex gap-4 mb-6">
      <Image
        src={avatarImg}
        className="rounded-full w-12 h-12"
        width={48}
        height={48}
        alt={activity.title}
      />
      <div>
        <p className="text-lg font-black mb-1 text-black">{activity.title}</p>
        <p className="text-sm text-[#697598] mb-1">{activity.time}</p>

        <div className="bg-[#F6F8FA] rounded-2xl px-4 py-7">
          <p className="text-sm text-[#697598]">
            {activity.action}
            <span className="ml-1 font-black text-black">{activity.user}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvoiceActivityItem;
