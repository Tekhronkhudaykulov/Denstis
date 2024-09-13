const Form = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Оставьте заявку
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
      </p>

      <form action="#" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold mb-2">
              Ваше Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">
              Ваш телефон
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваш email"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="text-gray-700 font-semibold mb-2"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваше сообщение"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[green] text-white font-bold py-3 px-6 rounded-lg hover:bg-[green] transition duration-300"
            >
              Отправить заявку
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
