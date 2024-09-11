import { useState } from "react";
import Accordion from "./Accordion";
import "./App.css";
import { IoIosCall } from "react-icons/io";
import Advantes from "./Advantes";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index); // One at a time opens, others close
  };

  const accordions = [
    {
      title: "Детская Стоматология",
      content:
        "Детская стоматология — это направление стоматологии, которое занимается лечением зубов, профилактикой и уходом за полостью рта у детей, начиная с самого раннего возраста.",
    },
    {
      title: "Терапевтический Стоматология",
      content:
        "Терапевтическая стоматология — это область стоматологии, которая занимается диагностикой, лечением и профилактикой заболеваний зубов и тканей полости рта.",
    },
    {
      title: "Ортопедические Стоматология",
      content:
        "Ортопедическая стоматология — это область стоматологии, которая занимается восстановлением утраченных зубов и исправлением дефектов зубного ряда с помощью различных протезов.",
    },
    {
      title: "Хирургический Стоматология",
      content:
        "Хирургическая стоматология — это направление стоматологии, которое занимается диагностикой и хирургическим лечением заболеваний зубов, десен, челюсти и других структур полости рта.",
    },
  ];
  return (
    <div>
      <section
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="900"
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

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a href="#service" className="hover:text-gray-300">
                Услуги
              </a>
              <a href="#advantes" className="hover:text-gray-300">
                Преимущества
              </a>
              <a href="#form" className="hover:text-gray-300">
                Подать заявку
              </a>
            </div>
            <div className="flex items-center gap-x-[10px] bg-[#1a73e8] px-[20px] py-[15px] text-white rounded-[12px]">
              <IoIosCall fontSize={20} />
              <a href="tel:+998937197771">+998 93 719 77 71</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-header" data-aos="fade-up" data-aos-duration="800">
        <div className="container-site">
          <div className="flex items-start justify-center flex-col h-[100vh]">
            <p className="text-[60px]">Детская стоматология</p>
            <p>
              Детская стоматология — это отрасль медицины, которая
              специализируется на поддержании здоровья зубов и полости рта у
              детей, включая специализированные подходы к стоматологической
              помощи, профилактике и лечению заболеваний. Детские зубы (молочные
              зубы) более хрупкие, чем зубы взрослого, их эмаль тоньше и кариес
              может развиться быстрее.
            </p>
            <div className="flex items-center mt-[20px] gap-x-[10px] w-max bg-[#1a73e8] px-[20px] py-[15px] text-white rounded-[12px]">
              <IoIosCall fontSize={20} />
              <a href="">+998 93 719 77 71</a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-site pt-[20px]"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        id="service"
      >
        <div className="text-center text-[40px] font-bold">Наши Услуги</div>
        <div className="p-6 grid ">
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              title={accordion.title}
              content={accordion.content}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </section>

      <section
        className="bg-child-picture"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      ></section>
      <Advantes />

      <section
        className="container-site pt-[20px]"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        id="form"
      >
        <Form />
      </section>

      <section className=" pt-[20px]">
        <Footer />
      </section>
    </div>
  );
}

export default App;
