import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="bg-gray-800 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <svg
              className="w-12 h-12 text-white mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3l2 2M12 12l-2-2m8 7v-4M4 10v4"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="2"
              ></circle>
            </svg>
            <h1 className="text-2xl font-bold">DentalCare</h1>
          </div>

          <div className=" md:flex hidden flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#service" className="hover:text-gray-300 text-[20px]">
              Услуги
            </a>
            <a href="#advantes" className="hover:text-gray-300 text-[20px]">
              Преимущества
            </a>
            <a href="#form" className="hover:text-gray-300 text-[20px]">
              Подать заявку
            </a>
          </div>
          <div className="flex items-center gap-x-[10px] bg-[green] px-[20px] py-[15px] text-white rounded-[12px]">
            <IoIosCall fontSize={20} />
            <a href="tel:+998937197771">Позвонить +998 93 719 77 71</a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 DentalCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
