import { Link } from "react-router-dom"
export default function Banner() {
    return (
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                OwnDark Ecommerce
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Te damos la BIENVENIDA a nuestra <br/>Tienda Virtual <b>OwnDark</b> <br/>
                Visita nuestra tienda y mira nuestros productos. 
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-225881.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-248870.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-204987.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-228081.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-203829.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-242967.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://owndark.s3.amazonaws.com/media/photos/2023/01/backiee-242952.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <Link
                  to="/shop"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Tienda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }