import Marquee from "react-fast-marquee";



// 
// 
// 
// 
// 
// 
// 


const CompanyLogoMarquee = () => {
    return (
        <Marquee className="py-10 dark:bg-black dark:text-white">
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='130' src="https://i.ibb.co/Yj8h4b3/kindpng-124731.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Ford</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='100' src="https://i.ibb.co/KL43Srh/kindpng-1102492.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Toyota</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='50' src="https://i.ibb.co/VHG2pzs/kindpng-2777246.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Rolls Royce</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='100' src="https://i.ibb.co/b2BfTDb/kindpng-1055885.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Nissan</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='100' src="https://i.ibb.co/7vPy8FK/kindpng-124587.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Mahindra</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='70' src="https://i.ibb.co/R06W6xb/kindpng-657075.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Lamborghini</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='80' src="https://i.ibb.co/tcSxmKN/kindpng-1124270.png" alt="" />
                <h1 className="text-xl font-bold mt-2">BMW</h1>
            </div>
            <div className="flex ml-20 flex-col items-center justify-center">
                <img width='80' src="https://i.ibb.co/2hSd7sK/kindpng-696738-1.png" alt="" />
                <h1 className="text-xl font-bold mt-2">Royal Enfield</h1>
            </div>
        </Marquee>
    )
}

export default CompanyLogoMarquee