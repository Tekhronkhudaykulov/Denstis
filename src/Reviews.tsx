const Reviews = () => {
  return (
    <>
      <section className=" text-white py-6 text-center mt-10">
        <h1 className="text-3xl font-bold text-black">
          Mijozlarimizning Fikrlari
        </h1>
        <p className="mt-2 text-gray-600">
          Bizning xizmatlarimiz haqida mijozlarimiz nima deyishmoqda?
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg p-6">
        <div
          data-aos="zoom-in-left"
          className="border-b border-gray-200 pb-4 mb-4"
        >
          <h3 className="text-xl font-semibold text-green-600">Shahzoda</h3>
          <p className="mt-2 text-gray-700">
            Men bu klinikadan juda mamnunman. Doktorlar juda professional va
            do'stona. Tish og'rig'idan tezda qutuldim!
          </p>
          <span className="text-sm text-gray-500 block mt-2">
            12 sentyabr, 2024
          </span>
        </div>

        <div
          data-aos="zoom-in-right"
          className="border-b border-gray-200 pb-4 mb-4"
        >
          <h3 className="text-xl font-semibold text-green-600">Jasur</h3>
          <p className="mt-2 text-gray-700">
            Xizmatlar yuqori darajada! Tishlarimni tozalatish jarayoni juda
            yoqdi, klinika toza va qulay.
          </p>
          <span className="text-sm text-gray-500 block mt-2">
            10 sentyabr, 2024
          </span>
        </div>

        <div data-aos="zoom-in-left">
          <h3 className="text-xl font-semibold text-green-600">Nilufar</h3>
          <p className="mt-2 text-gray-700">
            Klinikadagi tibbiy asbob-uskunalar zamonaviy va xizmat ko'rsatish
            tezkor. Har bir tashrifdan keyin o'zimni yaxshi his qilyapman.
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
