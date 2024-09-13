import { useState } from "react";
import Accordion from "./Accordion";
import "./App.css";
import { IoIosCall } from "react-icons/io";
import Advantes from "./Advantes";
import Form from "./Form";
import Footer from "./Footer";
import Reviews from "./Reviews";

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
        className="bg-gray-800  text-white md:py-8 py-0 "
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  md:flex-row  justify-between items-center">
            <div className="flex items-center md:py-0 py-[20px] md:mb-0">
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
              <h1 className="text-2xl font-bold ">DentalCare</h1>
            </div>

            <div className=" md:flex hidden  flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
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
            <div className=" items-center gap-x-[10px] md:flex hidden bg-[green] px-[20px] py-[15px] text-white rounded-[12px]">
              <a href="tel:+998937197771">Позвонить +998 93 719 77 71</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-header" data-aos="fade-up" data-aos-duration="800">
        <div className="container mx-auto">
          <div className="flex items-start justify-center flex-col md:h-[100vh] container-devie">
            <p className=" md:w-[500px] w-[200px] md:text-[60px] text-[30px] font-bold ">
              Круглосуточная стоматология в Ташкенте | 24/7
            </p>
            <p className=" md:text-[35px] text-[20px] font-bold">
              Детская и взрослая стоматология
            </p>
            <p className="text-[20px] md:block hidden w-[1000px] leading-[30px]">
              Детская стоматология — это отрасль медицины, которая
              специализируется на поддержании здоровья зубов и полости рта у
              детей, включая специализированные подходы к стоматологической
              помощи, профилактике и лечению заболеваний. Детские зубы (молочные
              зубы) более хрупкие, чем зубы взрослого, их эмаль тоньше и кариес
              может развиться быстрее.
            </p>
            <div className="md:flex items-center justify-between w-full">
              <div className="flex items-center md:gap-x-[10px] gap-x-[5px] md:mt-[10px] mt-[20px] md:text-[20px] text-[16px] w-max md:h-[60px] h-[50px] bg-[green] md:px-[35px] px-[10px]  md:py-[20px] py-[10px] text-white rounded-[12px]">
                <IoIosCall fontSize={20} />
                <a href="tel:+998937197771">Позвонить +998 93 719 77 71</a>
              </div>
              <div className="md:mt-0 mt-[20px]">
                <p className="font-bold">Юнусобод район 13-квартал 4- дом</p>
                <p className="font-bold">
                  Ориентир, 📌( Мегапланет), 📍Ринок (Ахмад донищ )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mt-[20px] mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.3698882896806!2d69.29658607610308!3d41.36604777130268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef33574c36057%3A0x730c93d3a75fd166!2sYunusabad%2013%20Kvartal!5e0!3m2!1sen!2s!4v1726169199578!5m2!1sen!2s"
          width="100%"
          height="500"
        ></iframe>
      </section>
      <section
        className="container mx-[auto] pt-[20px]"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        id="service"
      >
        <div className="text-center  font-bold text-3xl">Наши Услуги</div>
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
        className="container mx-[auto] pt-[20px]"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        id="form"
      >
        <Form />
      </section>
      <section>
        <Reviews />
      </section>
      <section className="mt-[10px]">
        <Footer />
      </section>
    </div>
  );
}

export default App;
