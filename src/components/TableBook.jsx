import banner from "../assets/images/tableBook.jpeg";

const TableBook = () => {
  return (
    <div
      className="bg-cover bg-no-repeat md:h-[788px]"
      style={{
        backgroundImage:
          `url(${banner})`,
      }}
    >
      <div className="max-w-screen-[1920px]  mx-auto lg:px-[300px] py-[120px]  text-white">
        <div className="">
          <div className=" lg:pl-0 pl-8 ">
            <div className=" flex items-center gap-[10px] roboto-bold">
              <div className="w-[10px] h-[10px] bg-[#BD1F17]"></div>
              <h1 className="lg:text-xl text-base text-[#BD1F17]">Book Now</h1>
            </div>
            <h1 className=" lg:text-[62px] text-[40px] bebas-neue-regular ">Book Your Table</h1>
            <p className="text-white text-base leading-relaxed roboto-regular mb-9 md:w-[545px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </p>
          </div >
          <div className="  ">
            <form action="" className="flex items-center lg:items-start  gap-[30px] mb-8  flex-col">
              <div className="flex gap-[30px] lg:flex-row flex-col">
                <div>
                  <input type="text" className="lg:w-[302px] w-[330px] px-3 h-[46px] bg-transparent border" id="lname" name="lname" placeholder="Your Name*" />
                </div>

                <div>
                  <input type="text" className="lg:w-[302px] w-[330px] px-3 h-[46px] bg-transparent border text-white" id="lname" name="lname" placeholder="Your Email" />
                </div>
              </div>
              <div className="flex gap-[30px] lg:flex-row flex-col">
                <div>
                  <input type="date" className="lg:w-[302px] w-[330px] px-3 h-[46px] bg-transparent border" id="lname" name="lname" placeholder="Your Name*" />
                </div>

                <div>
                  <input type="number" className="lg:w-[302px] w-[330px] px-3 h-[46px] bg-transparent border text-white" id="lname" name="lname" placeholder="Total People" />
                </div>
              </div>
              <div className="flex gap-[30px] lg:flex-row flex-col">
                <input type="textarea" className="md:w-[635px] w-[330px] px-3 h-[140px] bg-transparent border text-white" id="lname" name="lname" placeholder="Message" />
              </div>
            </form>
            <div className="lg:pl-0 pl-12">
              <button className="lg:w-[180px] w-[149px] lg:h-[56px] h-[48px] px-4 py-4 gap-2 bg-[#FEBF00] roboto-bold text-base lg:text-lg">About More</button>
            </div>


          </div>

        </div>
      </div>
    </div>

  );
};
export default TableBook;
