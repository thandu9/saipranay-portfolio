export function Diagram({ kind }: { kind: string }) {
  return (
    <svg
      className="work-diagram"
      viewBox="0 0 500 240"
      fill="none"
      aria-hidden="true"
    >
      {kind === "geospatial-pipelines" ? (
        <>
          <g stroke="currentColor" opacity=".4">
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`m${45 + i * 8} ${65 + i * 27} 75-35 75 35-75 35z`}
              />
            ))}
          </g>
          <path d="M203 120h57m80 0h82" stroke="currentColor" />
          <rect x="260" y="82" width="80" height="76" stroke="currentColor" />
          <path d="m280 121 14 13 26-30" stroke="currentColor" />
          <g stroke="currentColor">
            <rect x="422" y="65" width="35" height="110" />
            <path d="M429 81h21m-21 14h21m-21 14h21m-21 14h21m-21 14h21m-21 14h21" />
          </g>
          <g fill="currentColor" fontSize="11">
            <text x="70" y="222">
              LAYERS
            </text>
            <text x="268" y="194">
              VALIDATE
            </text>
            <text x="412" y="204">
              PUBLISH
            </text>
          </g>
        </>
      ) : kind === "delivery-intelligence" ? (
        <>
          <g stroke="currentColor">
            <rect x="185" y="80" width="130" height="80" />
            <rect x="30" y="92" width="95" height="56" />
            <rect x="202" y="7" width="95" height="40" />
            <rect x="375" y="92" width="95" height="56" />
            <path d="M125 120h60m130 0h60M250 47v33" />
            <path d="M198 109h104m-104 15h104m-104 15h104" opacity=".4" />
          </g>
          <g fill="currentColor" fontSize="11">
            <text x="47" y="122">
              DISTRICT
            </text>
            <text x="221" y="32">
              PROJECT
            </text>
            <text x="390" y="122">
              PROGRAM
            </text>
            <text x="208" y="190">
              PROJECT FACT
            </text>
            <text x="137" y="111">
              1
            </text>
            <text x="170" y="111">
              *
            </text>
            <text x="325" y="111">
              *
            </text>
            <text x="357" y="111">
              1
            </text>
          </g>
        </>
      ) : (
        <>
          <g stroke="currentColor">
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <rect x="35" y={28 + i * 47} width="138" height="32" />
                <path d={`M48 ${44 + i * 47}h77m-77 7h48`} opacity=".4" />
                <path
                  d={`M173 ${44 + i * 47}H220L270 ${i === 2 ? 180 : 92}`}
                  opacity=".5"
                />
              </g>
            ))}
            <rect x="270" y="63" width="190" height="58" />
            <rect x="270" y="154" width="190" height="58" />
            <path d="m290 92 8 8 17-19M300 167v15m0 6v2" />
          </g>
          <g fill="currentColor" fontSize="12">
            <text x="330" y="97">
              MATCHED
            </text>
            <text x="330" y="188">
              REVIEW
            </text>
          </g>
        </>
      )}
    </svg>
  );
}
