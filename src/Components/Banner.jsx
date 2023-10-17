
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    // https://i.ibb.co/f0YCWVM/wallpaperflare-com-wallpaper-8.jpg
    // 
    // https://i.ibb.co/VCnJS1v/wallpaperflare-com-wallpaper-6.jpg


    return (
        <div ref={sliderRef} className="keen-slider h-[800px]">
            <div  style={{ backgroundImage: `url(https://i.ibb.co/f0YCWVM/wallpaperflare-com-wallpaper-8.jpg)` }} className="keen-slider__slide bgx number-slide1 h-full  bgx">
                <div className="w-full h-full bgp flex justify-center flex-col items-center">
                    <h1 className="text-8xl text-white font-bold">BMB</h1>
                    <h1 className="text-md text-white">Bangladesh Motors Business</h1>
                    <h1 className="text-4xl mt-10 text-white">"BMB: Transforming Ideas Since 1999 - Where Creativity Meets Innovation!"</h1>
                    <p className="text-white max-w-4xl my-10 text-center text-lg">Drive into the world of BMB, where automotive excellence has been our passion since 1999. With over two decades of dedication to innovation and design, we're at the forefront of the automotive industry. Explore our commitment to crafting exceptional vehicles and experience a legacy of driving pleasure that's unmatched</p>
                </div>
            </div>
            <div  style={{ backgroundImage: `url(https://i.ibb.co/nDvvDT4/wallpaperflare-com-wallpaper-7.jpg)` }} className="keen-slider__slide bgx number-slide1 h-full  bgx">
                <div className="w-full h-full bgp flex justify-center flex-col items-center">
                    <h1 className="text-8xl text-white font-bold">BMB</h1>
                    <h1 className="text-md text-white">Bangladesh Motors Business</h1>
                    <h1 className="text-4xl mt-6 text-white"><h1 className="text-4xl mt-10 text-white">"BMB: Transforming Ideas Since 1999 - Where Creativity Meets Innovation!"</h1></h1>
                    <p className="text-white max-w-4xl my-10 text-center text-lg">Drive into the world of BMB, where automotive excellence has been our passion since 1999. With over two decades of dedication to innovation and design, we're at the forefront of the automotive industry. Explore our commitment to crafting exceptional vehicles and experience a legacy of driving pleasure that's unmatched</p>
                </div>
            </div>
            <div  style={{ backgroundImage: `url(https://i.ibb.co/VCnJS1v/wallpaperflare-com-wallpaper-6.jpg)` }} className="keen-slider__slide bgx number-slide1 h-full  bgx">
                <div className="w-full h-full bgp flex justify-center flex-col items-center">
                    <h1 className="text-8xl text-white font-bold">BMB</h1>
                    <h1 className="text-md text-white">Bangladesh Motors Business</h1>
                    <h1 className="text-4xl mt-10 text-white">"BMB: Where Visionaries Gather - Crafting Web Excellence Since 1999."</h1>
                    <p className="text-white max-w-4xl my-10 text-center text-lg">Drive into the world of BMB, where automotive excellence has been our passion since 1999. With over two decades of dedication to innovation and design, we're at the forefront of the automotive industry. Explore our commitment to crafting exceptional vehicles and experience a legacy of driving pleasure that's unmatched</p>
                </div>
            </div>
        </div>
    )
}

export default Banner