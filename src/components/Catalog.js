import react from 'react'
import styles from "./Catalog.css"

const Catalog = () => {
  
  const changeItem = () => {
    const elem = document.getElementById('catalogparaments')
    elem.style.visibility = 'visible'
  }

  // const rechangeItem = () => {
  //   const elem = document.getElementById('catalogparaments')
  //   elem.style.visibility = 'hidden'
  //  }
  // onMouseOut={rechangeItem}

  
  return (
    <div class="catalog1">
        <div class="lcatalog">
            <div>
              <a class="themskat" onMouseOver={changeItem}>ADC/DAC/Data Conversion</a>
            </div>
            <div>
              <a class="themskat" onMouseOver={changeItem}>Audio Components/Vibration Motor</a>
            </div>
            <div>
              <a class="themskat">Bead/Filter/EMI Optimization</a>
            </div>
            <div>
              <a class="themskat">Capacitors</a>
            </div>
            <div>
              <a class="themskat">Cleaning/daily necessities</a>
            </div>
            <div>
              <a class="themskat">Communication Interface Chip/UART/485/232</a>
            </div>
            <div>
              <a class="themskat">Connectors</a>
            </div>
            <div>
              <a class="themskat">Consumables</a>
            </div>
            <div>
              <a class="themskat">Crystal Oscillator/Oscillator/Resonator</a>
            </div>
            <div class="verticalLine"/>
        </div>
        <div class="catalogparaments" id="catalogparaments">    
              <h class="ho1">ADC/DAC/Data Conversion</h><br/>
              <h class="ho2">RMS-to-DC Converters</h><br/>
              <h class="ho2">Digital To Analog Converters (DACs)</h><br/>
              <h class="ho2">ADC/DAC - Specialized</h><br/>
              <h class="ho2">Voltage-to-Frequency / Frequency-to-Voltage Converters</h><br/>
              <h class="ho2">Direct Digital Synthesis (DDS)</h><br/>
              <h class="ho2">Energy Metering ICs</h><br/>
              <h class="ho2">Digital Potentiometers</h><br/>
              <h class="ho2">Touch Screen Controllers</h><br/>
              <h class="ho2">Analog Front End (AFEs)</h>
        </div>
        <div class="catalogparaments2" id="catalogparaments2">    
              <h class="ho1">asda</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h><br/>
              <h class="ho2">asd</h>
        </div>
    </div>
  );
}

export default Catalog;
