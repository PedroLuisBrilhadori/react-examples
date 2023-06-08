import { GrowSection } from "../components/grow";
import { MakeSpecialSection } from "../components/makeSpecial";
import { Navbar } from "../components/navbar";
import { Tab } from "../components/tab";

export const OtherPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar>
        <>
          <Tab selected={false} href="/#grow">
            grow section
          </Tab>
          <Tab selected={false} href="/#make">
            make special
          </Tab>
          <Tab selected={false} href="/other">
            other
          </Tab>
        </>
      </Navbar>

      <div className="flex flex-col gap-6">
        <GrowSection />

        <MakeSpecialSection />
      </div>
    </div>
  );
};
