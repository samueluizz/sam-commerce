'use client';

import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Wireless headphones',
    price: '$11,70',
    image: '/headphones.png',
  },
  {
    id: 2,
    name: 'Play game',
    price: '$11,70',
    image: '/gamepad.png',
  },
  {
    id: 3,
    name: 'Tablet as a laptop',
    price: '$11,70',
    image: '/laptop.png',
  },
];

/* const categorias = [
  {
    id: 1,
    nome: 'Speaker',
    imagem: '/speaker-nobg.png',
    itens: 6,
  },
  {
    id: 2,
    nome: 'Desktop & laptop',
    imagem: '/notebook-nobg.png',
    itens: 6,
  },
  {
    id: 3,
    nome: 'DSLR camera',
    imagem: '/camera-nobg.png',
    itens: 6,
  },
  // Adicione mais se quiser
]; */

export default function Home() {
  return (
    <div className='bg-[#f8fafd] min-h-screen flex flex-col'>
      {/* Header */}
      <header className='bg-white border-b'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4'>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-gray-500'>
              Need help? Call us: (+98) 0234 456 789
            </span>
          </div>
          <div className='flex items-center gap-6 text-xs text-gray-500 mt-2 md:mt-0'>
            <span>Our store</span>
            <span>Track your order</span>
          </div>
        </div>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4'>
          <div className='flex items-center gap-2'>
            <span className='text-2xl font-bold text-[#22577A]'>Electon</span>
          </div>
          <div className='flex-1 flex items-center justify-center mt-4 md:mt-0'>
            <input
              type='text'
              placeholder='Search any things'
              className='w-full max-w-md px-4 py-2 border rounded-l-lg focus:outline-none'
            />
            <button className='bg-[#F6B93B] text-white px-6 py-2 rounded-r-lg font-semibold'>
              Search
            </button>
          </div>
          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <button className='text-[#22577A] font-semibold'>Sign in</button>
            <button className='text-[#22577A] font-semibold'>Sign in</button>
            <button className='text-[#22577A] font-semibold'>Cart</button>
          </div>
        </div>
        <div className='container mx-auto flex items-center gap-4 py-2 px-4'>
          <button className='bg-[#F6B93B] text-white px-4 py-2 rounded font-semibold'>
            Browse categories
          </button>
          <nav className='flex gap-6 text-sm text-[#22577A] font-semibold'>
            <span>Home</span>
            <span>Catalog</span>
            <span>Blog</span>
            <span>Pages</span>
            <span>About us</span>
          </nav>
          <span className='ml-auto text-xs text-[#22577A] font-bold'>
            30 Days Free Return
          </span>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className='container mx-auto py-4 px-4 text-sm text-gray-500'>
        Home &gt; All category
      </div>

      <main className='container mx-auto flex-1 flex flex-col md:flex-row gap-8 px-4'>
        {/* Sidebar */}
        <aside className='w-full md:w-1/4 mb-8 md:mb-0'>
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h3 className='font-bold mb-2'>
              Categories{' '}
              <span className='text-xs text-gray-400 ml-2'>Reset</span>
            </h3>
            <ul className='space-y-1 text-sm'>
              <li>
                Tablet <span className='float-right text-gray-400'>5</span>
              </li>
              <li>
                Laptop <span className='float-right text-gray-400'>5</span>
              </li>
              <li>
                Headphones <span className='float-right text-gray-400'>5</span>
              </li>
              <li>
                Console <span className='float-right text-gray-400'>5</span>
              </li>
              <li>
                Other <span className='float-right text-gray-400'>5</span>
              </li>
            </ul>
          </div>
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h3 className='font-bold mb-2'>
              Availability{' '}
              <span className='text-xs text-gray-400 ml-2'>Reset</span>
            </h3>
            <div className='flex flex-col gap-2 text-sm'>
              <label>
                <input type='checkbox' /> In stock
              </label>
              <label>
                <input type='checkbox' /> Out of stock
              </label>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h3 className='font-bold mb-2'>
              Product type{' '}
              <span className='text-xs text-gray-400 ml-2'>Reset</span>
            </h3>
            <div className='flex flex-col gap-2 text-sm'>
              <label>
                <input type='checkbox' /> Smart-watch
              </label>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h3 className='font-bold mb-2'>
              Brand <span className='text-xs text-gray-400 ml-2'>Reset</span>
            </h3>
            <div className='flex flex-col gap-2 text-sm'>
              <label>
                <input type='checkbox' /> Smart-watch
              </label>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h3 className='font-bold mb-2'>
              Color <span className='text-xs text-gray-400 ml-2'>Reset</span>
            </h3>
            <div className='flex gap-2'>
              <span className='w-4 h-4 rounded-full bg-red-500 inline-block'></span>
              <span className='w-4 h-4 rounded-full bg-green-500 inline-block'></span>
              <span className='w-4 h-4 rounded-full bg-blue-500 inline-block'></span>
              <span className='w-4 h-4 rounded-full bg-yellow-500 inline-block'></span>
              <span className='w-4 h-4 rounded-full bg-purple-500 inline-block'></span>
              <span className='w-4 h-4 rounded-full bg-pink-500 inline-block'></span>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4'>
            <h3 className='font-bold mb-2'>
              Size <span className='text-xs text-gray-400 ml-2'>Reset</span>
            </h3>
            <div className='flex flex-col gap-2 text-sm'>
              <label>
                <input type='checkbox' /> M
              </label>
              <label>
                <input type='checkbox' /> S
              </label>
              <label>
                <input type='checkbox' /> X
              </label>
              <label>
                <input type='checkbox' /> XX
              </label>
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <section className='flex-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Array(6)
              .fill(0)
              .map((_, i) =>
                products.map((product) => (
                  <div
                    key={product.id + '-' + i}
                    className='bg-white rounded-lg p-4 flex flex-col items-center shadow-sm'
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={120}
                      className='mb-2'
                    />
                    <div className='font-semibold text-[#22577A]'>
                      {product.name}
                    </div>
                    <div className='text-[#F6B93B] font-bold'>
                      {product.price}
                    </div>
                    <div className='flex gap-1 mt-1'>
                      {[...Array(5)].map((_, idx) => (
                        <span
                          key={idx}
                          className='w-3 h-3 bg-gray-200 rounded-full inline-block'
                        ></span>
                      ))}
                    </div>
                  </div>
                )),
              )}
          </div>
        </section>
      </main>

      {/* Banner */}
      <div className='container mx-auto my-12 px-4'>
        <div className='bg-white rounded-lg flex flex-col md:flex-row items-center p-8 gap-8'>
          <div className='flex-1'>
            <Image src='/laptop.png' alt='Laptop' width={300} height={200} />
          </div>
          <div className='flex-1 flex flex-col items-start gap-4'>
            <button className='bg-[#F6B93B] text-white px-4 py-2 rounded font-semibold'>
              New laptop
            </button>
            <h2 className='text-3xl font-bold text-[#22577A]'>
              Sale up to 50% off
            </h2>
            <p className='text-gray-500'>12 inch hd display</p>
            <button className='bg-[#22577A] text-white px-6 py-2 rounded font-semibold'>
              Shop now
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className='bg-[#eaf6fb] py-8'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4'>
          <div className='text-2xl font-bold text-[#22577A]'>
            Subscribe newsletter
          </div>
          <div className='flex gap-2 w-full md:w-auto'>
            <input
              type='email'
              placeholder='Email address'
              className='px-4 py-2 rounded-l-lg border focus:outline-none w-full md:w-64'
            />
            <button className='bg-[#F6B93B] text-white px-6 py-2 rounded-r-lg font-semibold'>
              Subscribe
            </button>
          </div>
          <div className='text-sm text-gray-500'>
            Call us 24/7: (+62) 0123 567 789
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-white py-8 border-t'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
          <div>
            <div className='text-2xl font-bold text-[#22577A] mb-2'>
              Electon
            </div>
            <div className='text-sm text-gray-500 mb-2'>
              64 st james boulevard hoswick, ze2 7zj
            </div>
            <div className='flex gap-2'>
              <span className='w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center'>
                G
              </span>
              <span className='w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center'>
                I
              </span>
              <span className='w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center'>
                W
              </span>
            </div>
          </div>
          <div>
            <div className='font-bold mb-2'>Find product</div>
            <ul className='text-sm text-gray-500 space-y-1'>
              <li>Browzne arnold</li>
              <li>Chronograph blue</li>
              <li>Smart phones</li>
              <li>Automatic watch</li>
              <li>Hair straighteners</li>
            </ul>
          </div>
          <div>
            <div className='font-bold mb-2'>Get help</div>
            <ul className='text-sm text-gray-500 space-y-1'>
              <li>About us</li>
              <li>Contact us</li>
              <li>Return policy</li>
              <li>Privacy policy</li>
              <li>Payment policy</li>
            </ul>
          </div>
          <div>
            <div className='font-bold mb-2'>About us</div>
            <ul className='text-sm text-gray-500 space-y-1'>
              <li>News</li>
              <li>Service</li>
              <li>Our policy</li>
              <li>Customer care</li>
              <li>FAQ&apos;s</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
