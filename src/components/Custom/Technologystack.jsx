import React from "react";
import {
  CircleStackIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import web1 from "../../assets/techlogo/angular.png";
import web2 from "../../assets/techlogo/node-js.png";
import web3 from "../../assets/techlogo/java.png";
import web4 from "../../assets/techlogo/php.png";
import web5 from "../../assets/techlogo/python.png";
import web6 from "../../assets/techlogo/react.png";
import web7 from "../../assets/techlogo/vuejs.png";
import web8 from "../../assets/techlogo/laravel.png";
import web9 from "../../assets/techlogo/microsoft-dotnet.png";
import web10 from "../../assets/techlogo/ember.png";
import mobile3 from "../../assets/mobile/app-icon-02.webp";
import mobile4 from "../../assets/mobile/cordova-icon.webp";
import mobile5 from "../../assets/mobile/flutter.png";
import mobile6 from "../../assets/mobile/kotlin (1).png";
import mobile7 from "../../assets/mobile/swift.png";
import mobile8 from "../../assets/mobile/xamarin.png";
import mobile9 from "../../assets/mobile/ionic.png";
import db1 from "../../assets/DB/mongodb.png";
import db2 from "../../assets/DB/mysql.png";
import db3 from "../../assets/DB/oracle.png";
import db4 from "../../assets/DB/psql-icon.webp";
import db5 from "../../assets/DB/redis.png";
import db6 from "../../assets/DB/sql.png";
import open1 from "../../assets/Open/drupal.png";
import open2 from "../../assets/Open/magento.png";
import open3 from "../../assets/Open/woocommerce.png";
import open4 from "../../assets/Open/wordpress.png";
import open5 from "../../assets/Open/shopify.png";
import cloud1 from "../../assets/Cloud/aws.png";
import cloud2 from "../../assets/Cloud/google-cloud.png";
import pay1 from "../../assets/payment/apple-pay.png";
import pay2 from "../../assets/payment/google-pay.png";
import pay3 from "../../assets/payment/mastercard.png";
import pay4 from "../../assets/payment/paypal.png";
import pay5 from "../../assets/payment/stripe.png";
import pay6 from "../../assets/payment/visa.png";

const stackGroups = [
  {
    title: "Web Development",
    description: "Build fast, secure & scalable web applications.",
    Icon: GlobeAltIcon,
    items: [
      { name: "Angular", logo: web1 },
      { name: "Node.js", logo: web2 },
      { name: "Java", logo: web3 },
      { name: "PHP", logo: web4 },
      { name: "Python", logo: web5 },
      { name: "React", logo: web6 },
      { name: "Vue.js", logo: web7 },
      { name: "Laravel", logo: web8 },
      { name: ".NET", logo: web9 },
      { name: "Ember.js", logo: web10 },
    ],
  },
  {
    title: "Database",
    description: "Reliable, high-performance databases.",
    Icon: CircleStackIcon,
    items: [
      { name: "MongoDB", logo: db1 },
      { name: "MySQL", logo: db2 },
      { name: "Oracle", logo: db3 },
      { name: "PostgreSQL", logo: db4 },
      { name: "Redis", logo: db5 },
      { name: "SQL Server", logo: db6 },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Create seamless mobile experiences.",
    Icon: DevicePhoneMobileIcon,
    items: [
      { name: "React Native", logo: web6 },
      { name: "Java", logo: web3 },
      { name: "iOS", logo: mobile3 },
      { name: "Cordova", logo: mobile4 },
      { name: "Flutter", logo: mobile5 },
      { name: "Kotlin", logo: mobile6 },
      { name: "Swift", logo: mobile7 },
      { name: "Xamarin", logo: mobile8 },
      { name: "Ionic", logo: mobile9 },
    ],
  },
  {
    title: "Opensource",
    description: "Powerful open-source platforms & tools.",
    Icon: CodeBracketSquareIcon,
    items: [
      { name: "Drupal", logo: open1 },
      { name: "Magento", logo: open2 },
      { name: "WooCommerce", logo: open3 },
      { name: "WordPress", logo: open4 },
      { name: "Shopify", logo: open5 },
    ],
  },
  {
    title: "Payment Integration",
    description: "Secure & seamless payment solutions.",
    Icon: CreditCardIcon,
    items: [
      { name: "Apple Pay", logo: pay1 },
      { name: "Google Pay", logo: pay2 },
      { name: "MasterCard", logo: pay3 },
      { name: "PayPal", logo: pay4 },
      { name: "Stripe", logo: pay5 },
      { name: "Visa", logo: pay6 },
    ],
  },
  {
    title: "Cloud Platforms",
    description: "Scalable, secure & high-availability cloud solutions.",
    Icon: CloudIcon,
    items: [
      { name: "AWS", logo: cloud1 },
      { name: "Google Cloud", logo: cloud2 },
    ],
  },
];

const Technologystack = () => {
  return (
    <section className="bg-white px-6 py-16 font-sans text-[#071734] md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5b73ff]">
            • • Technology Stack • •
          </p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight sm:text-[46px] lg:text-[52px]">
            Technology Stack We Practice
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4f5b76]">
            We leverage modern, reliable, and industry-leading technologies to
            build secure, scalable, and future-ready digital solutions for
            businesses worldwide.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {stackGroups.map(({ title, description, Icon, items }) => (
            <div
              key={title}
              className="grid overflow-hidden rounded-2xl border border-[#e8edf6] bg-white shadow-[0_14px_42px_rgba(14,32,64,0.06)] lg:grid-cols-[310px_1fr]"
            >
              <div className="flex items-center gap-5 border-b border-[#e6ecf8] p-5 lg:border-b-0 lg:border-r lg:border-dashed lg:border-[#9eb5ff]">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#eef3ff] shadow-[0_12px_28px_rgba(66,103,255,0.14)]">
                  <Icon className="h-9 w-9 text-[#4f69f6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-5 text-[#526079]">
                    {description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex h-[88px] flex-col items-center justify-center rounded-xl border border-[#edf1f7] bg-white px-3 shadow-[0_8px_24px_rgba(14,32,64,0.04)]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-10 w-full object-contain"
                    />
                    <p className="mt-2 text-center text-xs font-semibold text-[#111a30]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologystack;
