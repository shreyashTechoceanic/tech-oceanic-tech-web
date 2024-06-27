 
import logo from "../../assets/logo.svg"

 const Logo = () => {
  return (
    <div className="flex gap-[12.719px] items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col items-center justify-center capitalize">
          <h1 className="text-[#03488C] text-[16.51px] font-[800]">tech oceanic</h1>
          <h1 className="text-[#008FCD] text-[15.902px] font-[800]">Technologies</h1>
          <p className="text-[#F0F0F0] text-[5.915px] font-[500] tracking-[1.775px]">innovation in every steps</p>
        </div>
    </div>
  )
}



export default Logo