/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const ObjectInformation = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/279525519_5092006547551423_7981801745803409556_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFX0bpZs9yie1_6_5f9aI0JFeZNrf5fALEV5k2t_l8AsZBjC23Ukuhpq8RnyC7WJxAf7FaYHZn4VdwfewldHNOG&_nc_ohc=USlUYX5FhCkQ7kNvgGgpo5C&_nc_ht=scontent.fdad1-3.fna&oh=00_AYA-oqaD1nluSeRq3vcdnOBdDNLzXHZ2QhRIraUXrr90QQ&oe=6674CFFD"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Trường Đại học Sư phạm Kỹ Thuật
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Chào mừng các bạn đến với Trường Đại học Sư phạm Kỹ thuật thuộc
                Đại học Đà Nẵng, đây là cơ sở giáo dục đại học định hướng ứng
                dụng, đào tạo nguồn nhân lực kỹ thuật công nghệ các cấp: kỹ sư
                công nghệ, cử nhân sư phạm kỹ thuật và kỹ sư thực hành ứng dụng.
                Đến với Trường Đại học Sư phạm Kỹ thuật, các bạn có cơ hội học
                tập tại các cơ sở khang trang, tiện nghi, các xưởng thực hành,
                các phòng thí nghiệm đầy đủ thiết bị và hiện đại. Vị trí của
                trường nằm ở trung tâm thành phố Đà Nẵng, bên cạnh bãi biển
                Thanh Bình thơ mộng, là môi trường sống và học tập an toàn, tiết
                kiệm và hiệu quả đối với sinh viên cả nước.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Phát huy thế mạnh là một trường thành viên của Đại học Đà Nẵng,
                Trường Đại học Sư phạm Kỹ thuật được kế thừa và chia sẻ các
                nguồn lực chung của Đại học Đà Nẵng, đáng kể là đội ngũ các Giáo
                sư, Phó Giáo sư, Tiến sĩ, Thạc sĩ, các giảng viên nhiều kinh
                nghiệm và tâm huyết của Nhà trường và từ các trường thành viên
                khác đến giảng dạy tại trường.
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Tự tin, năng động, thực tiễn và sáng tạo là các cam kết của
                  Nhà trường về phẩm chất của sinh viên tốt nghiệp trường Đại
                  học Sư phạm Kỹ thuật.
                </p>
              </p>
              <br />
              <a
                href="https://ute.udn.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 text-sm mt-2 underline "
              >
                {" "}
                Trang chủ Trường Đại học Sư phạm Kỹ thuật{" "}
              </a>
              <br/>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 "> Nhấn phím C để tắt thông tin </p>
            </div>
          </div>
        </div>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>
      </div>
    );
  }

  return null;
};

export default ObjectInformation;
