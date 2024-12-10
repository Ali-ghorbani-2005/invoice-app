

export default function AboutUs() {
  return (
    <>
      {/* <div>

        <div>

          <div className="flex justify-center items-center">
            <p className="text-8xl font-extrabold">به نام خدا </p>
          </div>

          <div className=" flex mt-5 text-center">

            <p className="text-2xl font-semibold mt-36 ">سایت فاکتورینو به عنوان اولین نرم افزار وب ثبت فاکتور از  شما سپاس گذاریم که ما برای ثبت فاکتور خود انتخاب کرده اید</p>

            <div className="flex justify-end -mt-10">

              <img src="imgs/icons/working.png" className="w-[600px]" alt="" />

            </div>

          </div>



        </div>
      </div> */}


      <div className="bg-gray-50 min-h-screen py-10 px-5">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center">
            <p className="text-6xl font-extrabold text-blue-600">به نام خدا</p>
          </div>

          {/* Content Section */}
          <div className="mt-10 flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2">
              <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
                سایت فاکتورینو به عنوان اولین نرم‌افزار وب ثبت فاکتور از شما سپاسگزاریم که ما را برای ثبت فاکتور خود انتخاب کرده‌اید.
              </p>
            </div>

            {/* Image */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <img
                src="imgs/icons/working.png"
                className="w-3/4 max-w-[400px] shadow-lg rounded-lg"
                alt="Working illustration"
              />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
