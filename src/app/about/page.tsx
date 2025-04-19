import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# 关于我们

![FizzDragon®](/images/about.png)

请致电 +(65)81323869 联系我们。或通过电子邮件：business@fizzdragon.com`;

export async function generateMetadata() {
  return {
    title: "About Us",
    description: "Learn more about FizzDragon®",
    openGraph: {
      title: "About Us",
      description: "Learn more about FizzDragon®",
      images: [
        signOgImageUrl({
          title: "FizzDragon®",
          label: "About Us",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
