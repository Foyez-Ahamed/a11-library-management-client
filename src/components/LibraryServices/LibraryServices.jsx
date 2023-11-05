import { FaLongArrowAltRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LibraryServices = () => {
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className="card lg:first-letter">
          <div className='space-y-3'>
            <h2 className="card-title text-2xl font-bold">Library Guides</h2>
            <p><progress className="progress progress-primary w-[100px]" value="20" max="100"></progress></p>
            <p>Find books, media, databases, e-journals and digital resources.</p>
            <div className="card-actions">
             <Link><h1 className='flex justify-center items-center gap-4 text-[#0087EB] text-[18px]'>Read More <span><FaLongArrowAltRight ></FaLongArrowAltRight></span></h1></Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className='space-y-3'>
            <h2 className="card-title text-2xl font-bold">Borrow, Reserve, Renew</h2>
            <p><progress className="progress progress-primary w-[100px]" value="20" max="100"></progress></p>
            <p>Get advanced research assistance in dozens of subject areas.</p>
            <div className="card-actions">
             <Link><h1 className='flex justify-center items-center gap-4 text-[#0087EB] text-[18px]'>Read More <span><FaLongArrowAltRight></FaLongArrowAltRight></span></h1></Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className='space-y-3'>
            <h2 className="card-title text-2xl font-bold">Study Spaces & PCs</h2>
            <p><progress className="progress progress-primary w-[100px]" value="20" max="100"></progress></p>
            <p>Deposit data, papers, and other resources for long-term access.</p>
            <div className="card-actions">
             <Link><h1 className='flex justify-center items-center gap-4 text-[#0087EB] text-[18px]'>Read More <span><FaLongArrowAltRight></FaLongArrowAltRight></span></h1></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LibraryServices;
