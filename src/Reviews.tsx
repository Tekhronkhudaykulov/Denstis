const Reviews = () => {
  return (
    <>
      <section className=" text-white py-6 text-center mt-10">
        <h1 className="text-3xl font-bold text-black">Отзывы наших клиентов</h1>
        <p className="mt-2 text-gray-600">
          Что наши клиенты говорят о наших услугах?
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg p-6">
        <div
          data-aos="zoom-in-left"
          className="border-b border-gray-200 pb-4 mb-4"
        >
          <h3 className="text-xl font-semibold text-green-600">Шахзода</h3>
          <p className="mt-2 text-gray-700">
            Я очень довольна этой клиникой. Врачи очень профессиональны и
            дружелюбно Я быстро избавился от зубной боли!
          </p>
          <span className="text-sm text-gray-500 block mt-2">
            12 sentyabr, 2024
          </span>
        </div>

        <div
          data-aos="zoom-in-right"
          className="border-b border-gray-200 pb-4 mb-4"
        >
          <h3 className="text-xl font-semibold text-green-600">Жасур</h3>
          <p className="mt-2 text-gray-700">
            Услуги на высоте! Процесс чистки зубов очень Мне понравилось,
            клиника чистая и уютная.
          </p>
          <span className="text-sm text-gray-500 block mt-2">
            10 sentyabr, 2024
          </span>
        </div>

        <div data-aos="zoom-in-left">
          <h3 className="text-xl font-semibold text-green-600">Нилуфар</h3>
          <p className="mt-2 text-gray-700">
            Медицинское оборудование в клинике современное и исправное. быстрый.
            Я чувствую себя лучше после каждого посещения.
          </p>
          <span className="text-sm text-gray-500 block mt-2">
            8 sentyabr, 2024
          </span>
        </div>
      </section>
    </>
  );
};

export default Reviews;
