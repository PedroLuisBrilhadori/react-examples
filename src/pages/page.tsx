import { useEffect, useRef } from "react";
import { GrowSection } from "../components/grow";
import { MakeSpecialSection } from "../components/makeSpecial";
import { Navbar } from "../components/navbar";
import { Tab } from "../components/tab";
import { useLocation } from "react-router-dom";
import { useScroll } from "../hooks/useHash";

export const IndexPage = () => {
  const { hash } = useLocation();
  const makeRef = useRef<HTMLDivElement>(null);
  const growRef = useRef<HTMLDivElement>(null);

  const [scrollView] = useScroll({
    references: [makeRef, growRef],
    hash: hash.replace("#", ""),
  });

  useEffect(() => {
    scrollView();
  }, [scrollView]);

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
        <div ref={growRef} id="grow">
          <GrowSection />
        </div>

        <div ref={makeRef} id="make">
          <MakeSpecialSection />
        </div>
      </div>
    </div>
  );
};
