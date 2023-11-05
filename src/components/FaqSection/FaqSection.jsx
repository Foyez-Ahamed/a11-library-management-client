
import timePic from '../../assets/images/time.jpg'

const FaqSection = () => {
  return (
    <div>

       <div>
        <h1 className="text-4xl font-bold">Frequently Asked Any Questions <br /> And Schedule</h1>
        <progress
          className="progress progress-primary w-[100px]"
          value="20"
          max="100"
        ></progress>
      </div>

      <section className="flex flex-col md:flex-col lg:flex-row justify-between gap-8 mt-10">
        <div className="flex-1">

          <div className="card h-screen image-full">
            <figure>
              <img
                src={timePic}
                alt="time"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white font-bold text-3xl"> Library Hours </h2>
              
              <div className='mt-5'>
                <span>Special Collections</span>
                <p className='text-3xl font-bold'>10:30 AM – 12:00 PM</p>
              </div>

              
              <div className='mt-5'>
                <span>Architecture & Art Library</span>
                <p className='text-3xl font-bold'>12:30 PM – 1:30 PM</p>
              </div>

              
              <div className='mt-5'>
                <span>Music Library</span>
                <p className='text-3xl font-bold'>2:00 AM – 4:00 PM</p>
              </div>

              
              <div className='mt-5'>
                <span>Optometry Library</span>
                <p className='text-3xl font-bold'>5:30 AM – 7:00 PM</p>
              </div>

            </div>
          </div>

        </div>

        <div className="flex-1 space-y-4">
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            What is the main purpose of library management system?
            </div>
            <div className="collapse-content">
              <p>An integrated library management system (LMS) is ERP software that helps in simplifying the daily operations of the library. The purpose of a library management system is to manage & track the daily work of the library such as issuing books, return books, due calculations, etc.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How do you maintain library books?
            </div>
            <div className="collapse-content">
              <p>1. Do not leave books on shelves or carts with the foredge down <br /> 2.Leave books upright and firmly supported on shelf when shelving or retrieving. ...</p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Why books are kept in library?
            </div>
            <div className="collapse-content">
              <p>Typically, such libraries are used for research purposes, for example at a university. Some items at reference libraries may be historical and even unique. Many lending libraries contain a, which holds books, such as dictionaries, which are common reference books, and are therefore not lent out.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How do you manage library records?
            </div>
            <div className="collapse-content">
              <p>The best way to organize individual records for library media may be to structure the folder hierarchy similar to the library layout. Have a digital cabinet for DVDs, a cabinet for the childrens section, a cabinet for adult non-fiction. And then organize the folders within cabinets in a similar breakdown.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FaqSection;
