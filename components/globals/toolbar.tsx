// toolbar.tsx
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { RelativeDate } from "./relativedate";
import { GetStaticProps } from 'next';

interface ToolBarProps {
  RelativeDate: React.ComponentType<{ prefix: string; date: Date | null }>;
}

const ToolBar: React.FC<ToolBarProps> = ({ RelativeDate }) => {
  // Use the current date as the modification date for demonstration purposes
  const dateModified = new Date();

  return (
    <section>
      <div className="flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <span className="text-blue-700 font-bold text-md">
          <RelativeDate date={dateModified} prefix="Last updated" />
        </span>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center ">
            <Link href={siteConfig.links.contribute} target="_blank" rel="noreferrer">
              <div className={buttonVariants()}>
                <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">
                  <FaGithub className="h-6 w-6" />
                  <span className="font-semibold">Contribute</span>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<ToolBarProps> = async () => {
  return {
    props: {
      RelativeDate,
    },
    revalidate: 60, // In seconds
  };
};

export default ToolBar;