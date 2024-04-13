const GadgetConditons = ({ phoneCondition }) => {
  return (
    <ul className="pl-6 pt-4 mb-8">
      {/* Phone Starting */}
      {phoneCondition[0]?.phoneStarting !== undefined && (
        <li className="text-sm list-disc mb-2">
          {phoneCondition[0]?.phoneStarting === true
            ? "Can turn on/off"
            : "Can't turn on/off"}
        </li>
      )}

      {/* makeAndReceiveCalls  */}
      {phoneCondition[0]?.makeAndReceiveCalls !== undefined && (
        <li className="text-sm list-disc mb-2">
          {phoneCondition[0]?.makeAndReceiveCalls === true
            ? "Can make calls"
            : "Can't  make calls"}
        </li>
      )}

      {/* faultyVolumeButtons  */}
      {phoneCondition[0]?.faultyVolumeButtons === true && (
        <li className="text-sm list-disc mb-2">Volume buttons not working</li>
      )}

      {/* faultyFingerPrint  */}
      {phoneCondition[0]?.faultyFingerPrint === true && (
        <li className="text-sm list-disc mb-2">
          Fingerprint scanner not working
        </li>
      )}

      {/* missingSimCardTray  */}
      {phoneCondition[0]?.missingSimCardTray === true && (
        <li className="text-sm list-disc mb-2">Simcard tray missing</li>
      )}

      {/* faultySpeakers  */}
      {phoneCondition[0]?.faultySpeakers === true && (
        <li className="text-sm list-disc mb-2">Speaker not working</li>
      )}

      {/* faultyEarpiece  */}
      {phoneCondition[0]?.faultyEarpiece === true && (
        <li className="text-sm list-disc mb-2">Earpiece not working</li>
      )}

      {/* faultyPowerButton  */}
      {phoneCondition[0]?.faultyPowerButton === true && (
        <li className="text-sm list-disc mb-2">Power button not working</li>
      )}

      {/* faultyChargingPort  */}
      {phoneCondition[0]?.faultyChargingPort === true && (
        <li className="text-sm list-disc mb-2">Charging port not working</li>
      )}
      {/* faultyBackCamera  */}
      {phoneCondition[0]?.faultyBackCamera === true && (
        <li className="text-sm list-disc mb-2">Main camera not working</li>
      )}

      {/* faultyFrontCamera  */}
      {phoneCondition[0]?.faultyFrontCamera === true && (
        <li className="text-sm list-disc mb-2">Selfie camera not working</li>
      )}

      {/* scratchedScreen  */}
      {phoneCondition[0]?.scratchedScreen === true && (
        <li className="text-sm list-disc mb-2">Screen is scratched</li>
      )}

      {/* spottedScreen */}
      {phoneCondition[0]?.spottedScreen === true && (
        <li className="text-sm list-disc mb-2">Screen has spots or lines</li>
      )}

      {/* brokenScreen  */}
      {phoneCondition[0]?.brokenScreen === true && (
        <li className="text-sm list-disc mb-2">Screen is broken</li>
      )}

      {/* brokenCameraGlass  */}
      {phoneCondition[0]?.brokenCameraGlass === true && (
        <li className="text-sm list-disc mb-2">Camera glass broken</li>
      )}

      {/* damagedBackCoverGlass */}
      {phoneCondition[0]?.damagedBackCoverGlass === true && (
        <li className="text-sm list-disc mb-2">
          Back cover/glass broken or scratched
        </li>
      )}

      {/* brokenPhoneBody  */}
      {phoneCondition[0]?.brokenPhoneBody === true && (
        <li className="text-sm list-disc mb-2">
          Phone{"'"}s body dented/broken
        </li>
      )}

      {/* scratchedPhoneBody */}
      {phoneCondition[0]?.scratchedPhoneBody === true && (
        <li className="text-sm list-disc mb-2">
          Phone{"'"}s body is scratched
        </li>
      )}

      {/* originalCharger  */}
      {phoneCondition[0]?.originalCharger === true && (
        <li className="text-sm list-disc mb-2">
          Original charger plug of device present
        </li>
      )}

      {/* originalChargerCable  */}
      {phoneCondition[0]?.originalChargerCable === true && (
        <li className="text-sm list-disc mb-2">
          {" "}
          Original charger cable of device present
        </li>
      )}

      {/*  receipt  */}
      {phoneCondition[0]?.receipt === true && (
        <li className="text-sm list-disc mb-2">
          receipt with the same IMEI present
        </li>
      )}

      {/* originalBox  */}
      {phoneCondition[0]?.originalBox === true && (
        <li className="text-sm list-disc mb-2">Original Box present</li>
      )}

      {/* brandWarranty */}
      {phoneCondition[0]?.brandWarranty === true && (
        <li className="text-sm list-disc mb-2">Phone under brand warranty</li>
      )}
    </ul>
  );
};

export default GadgetConditons;
