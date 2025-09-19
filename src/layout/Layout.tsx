import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import { LayoutProps } from "../interface/ILayout";


export default function Layout({ children }: LayoutProps) {

  return (
    <div>
      <div>
        <div className="sticky top-0">
          <Header />
        </div>
        <div>{children}</div>
      </div>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
