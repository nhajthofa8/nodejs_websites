
import Headercomponents from '../Headercomponents/Headercomponents'

const Defaultcomponents = ({children}) => {
  return (
    <div>
      <Headercomponents></Headercomponents>
      {children}

    </div>
  )
}

export default Defaultcomponents
