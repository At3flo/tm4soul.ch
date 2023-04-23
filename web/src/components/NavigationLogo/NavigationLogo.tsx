const NavigationLogo = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '2500px',
          position: 'absolute',
          left: '50%',
          top: '0px',
          marginLeft: '-1250px',
          zIndex: '1',
        }}
      >
        <img
          src="https://tm4soul.ch/assets/img/logo_tm4soul.jpg"
          alt=""
          style={{
            display: 'block',
            margin: '0 auto',
            clipPath: 'inset(0 500px 10px 0)',
          }}
        />
      </div>
    </div>
  )
}

export default NavigationLogo
