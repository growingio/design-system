import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg fill="none" viewBox="0 0 320 224" ref={ref} {...props}>
    <circle cx={287.6} cy={157.2} r={2.8} stroke="#ECEEF4" strokeWidth={1.6} />
    <circle cx={20.4} cy={40.4} r={2.8} stroke="#ECEEF4" strokeWidth={1.6} />
    <circle cx={44} cy={64.8} r={1.6} stroke="#93B9F6" strokeWidth={1.6} />
    <circle cx={228} cy={214.4} r={1.6} stroke="#FEBCA2" strokeWidth={1.6} />
    <circle cx={203.2} cy={18.4} r={1.6} stroke="#FEBCA2" strokeWidth={1.6} />
    <g filter="url(#result-500__a)">
      <rect
        width={217.6}
        height={160}
        x={51.2}
        y={40}
        fill="url(#result-500__b)"
        rx={16}
      />
      <rect
        width={216}
        height={158.4}
        x={52}
        y={40.8}
        stroke="url(#result-500__c)"
        strokeWidth={1.6}
        rx={15.2}
      />
    </g>
    <path
      fill="url(#result-500__d)"
      d="M65.6 72a9.6 9.6 0 0 1 9.6-9.6h169.6a9.6 9.6 0 0 1 9.6 9.6v104a9.6 9.6 0 0 1-9.6 9.6H75.2a9.6 9.6 0 0 1-9.6-9.6V72Z"
    />
    <g filter="url(#result-500__e)">
      <path
        fill="#1F61E8"
        d="M106.571 158.205c-5.042.532-8.553.616-12.52.396a1.582 1.582 0 0 1-1.48-1.419l-1.119-10.592a1.609 1.609 0 0 1 1.777-1.763c3.278.35 5.752.463 10.16-.002 6.301-.665 11.432-2.357 10.84-7.958-.563-5.339-4.368-6.176-11.369-5.437-3.51.371-7.708 1.246-11.35 2.186-1.037.268-2.057-.52-2.038-1.592l.594-32.962a1.6 1.6 0 0 1 1.431-1.563l30.608-3.23a1.6 1.6 0 0 1 1.759 1.423l1.124 10.645a1.6 1.6 0 0 1-1.423 1.759l-18.625 1.966-.508 9.433c2.054-.659 3.611-1 5.974-1.25 13.214-1.395 20.093 4.251 21.423 16.853 1.441 13.652-7.843 21.268-25.258 23.107Z"
      />
      <path
        fill="url(#result-500__f)"
        d="M106.571 158.205c-5.042.532-8.553.616-12.52.396a1.582 1.582 0 0 1-1.48-1.419l-1.119-10.592a1.609 1.609 0 0 1 1.777-1.763c3.278.35 5.752.463 10.16-.002 6.301-.665 11.432-2.357 10.84-7.958-.563-5.339-4.368-6.176-11.369-5.437-3.51.371-7.708 1.246-11.35 2.186-1.037.268-2.057-.52-2.038-1.592l.594-32.962a1.6 1.6 0 0 1 1.431-1.563l30.608-3.23a1.6 1.6 0 0 1 1.759 1.423l1.124 10.645a1.6 1.6 0 0 1-1.423 1.759l-18.625 1.966-.508 9.433c2.054-.659 3.611-1 5.974-1.25 13.214-1.395 20.093 4.251 21.423 16.853 1.441 13.652-7.843 21.268-25.258 23.107Z"
      />
      <path
        stroke="url(#result-500__g)"
        strokeWidth={0.88}
        d="m104.894 109.624-.373.04-.02.374-.509 9.434-.034.637.608-.195c2.026-.65 3.553-.985 5.886-1.231 6.545-.691 11.435.371 14.848 3.084 3.412 2.712 5.433 7.142 6.091 13.377.708 6.705-1.215 11.875-5.412 15.609-4.22 3.753-10.79 6.099-19.454 7.014-5.021.53-8.51.613-12.45.395a1.143 1.143 0 0 1-1.067-1.026l-1.118-10.592a1.17 1.17 0 0 1 1.292-1.28c3.304.353 5.81.467 10.253-.002 3.159-.333 6.101-.929 8.186-2.189 1.051-.635 1.899-1.447 2.441-2.491.542-1.045.76-2.29.605-3.761-.146-1.383-.506-2.511-1.101-3.404-.599-.898-1.419-1.533-2.439-1.954-2.01-.831-4.812-.84-8.313-.47-3.54.373-7.76 1.254-11.413 2.197-.763.196-1.502-.384-1.489-1.158l.594-32.962a1.16 1.16 0 0 1 1.038-1.133l30.608-3.23a1.16 1.16 0 0 1 1.275 1.031l1.123 10.645a1.159 1.159 0 0 1-1.031 1.275l-18.625 1.966Z"
      />
      <path
        stroke="url(#result-500__h)"
        strokeWidth={0.88}
        d="m104.894 109.624-.373.04-.02.374-.509 9.434-.034.637.608-.195c2.026-.65 3.553-.985 5.886-1.231 6.545-.691 11.435.371 14.848 3.084 3.412 2.712 5.433 7.142 6.091 13.377.708 6.705-1.215 11.875-5.412 15.609-4.22 3.753-10.79 6.099-19.454 7.014-5.021.53-8.51.613-12.45.395a1.143 1.143 0 0 1-1.067-1.026l-1.118-10.592a1.17 1.17 0 0 1 1.292-1.28c3.304.353 5.81.467 10.253-.002 3.159-.333 6.101-.929 8.186-2.189 1.051-.635 1.899-1.447 2.441-2.491.542-1.045.76-2.29.605-3.761-.146-1.383-.506-2.511-1.101-3.404-.599-.898-1.419-1.533-2.439-1.954-2.01-.831-4.812-.84-8.313-.47-3.54.373-7.76 1.254-11.413 2.197-.763.196-1.502-.384-1.489-1.158l.594-32.962a1.16 1.16 0 0 1 1.038-1.133l30.608-3.23a1.16 1.16 0 0 1 1.275 1.031l1.123 10.645a1.159 1.159 0 0 1-1.031 1.275l-18.625 1.966Z"
      />
    </g>
    <g filter="url(#result-500__i)">
      <path
        fill="#1F61E8"
        d="M161.808 155.632c-14.432 0-23.408-6.336-23.408-31.504 0-25.08 8.976-31.328 23.408-31.328s23.32 6.248 23.32 31.328c0 25.168-8.888 31.504-23.32 31.504Zm0-14.256c5.544 0 7.128-3.08 7.128-17.16 0-14.168-1.584-17.336-7.128-17.336-5.368 0-7.128 3.168-7.128 17.336 0 14.08 1.76 17.16 7.128 17.16Z"
      />
      <path
        fill="url(#result-500__j)"
        d="M161.808 155.632c-14.432 0-23.408-6.336-23.408-31.504 0-25.08 8.976-31.328 23.408-31.328s23.32 6.248 23.32 31.328c0 25.168-8.888 31.504-23.32 31.504Zm0-14.256c5.544 0 7.128-3.08 7.128-17.16 0-14.168-1.584-17.336-7.128-17.336-5.368 0-7.128 3.168-7.128 17.336 0 14.08 1.76 17.16 7.128 17.16Z"
      />
      <path
        stroke="url(#result-500__k)"
        strokeWidth={0.88}
        d="M161.808 155.192c-7.159 0-12.855-1.572-16.782-6.16-3.944-4.609-6.186-12.353-6.186-24.904 0-12.507 2.242-20.206 6.185-24.782 3.927-4.556 9.622-6.106 16.783-6.106 7.161 0 12.834 1.55 16.738 6.105 3.922 4.576 6.142 12.275 6.142 24.783 0 12.552-2.22 20.296-6.143 24.905-3.905 4.587-9.578 6.159-16.737 6.159Zm0-13.376c1.421 0 2.644-.196 3.664-.755 1.032-.566 1.809-1.476 2.383-2.811 1.131-2.627 1.521-7.008 1.521-14.034 0-7.07-.39-11.495-1.52-14.153-.574-1.35-1.349-2.275-2.381-2.851-1.021-.57-2.245-.772-3.667-.772-1.38 0-2.582.203-3.594.773-1.021.575-1.802 1.498-2.387 2.847-1.152 2.659-1.587 7.083-1.587 14.156 0 7.029.435 11.41 1.588 14.037.586 1.333 1.367 2.242 2.389 2.807 1.011.559 2.212.756 3.591.756Z"
      />
      <path
        stroke="url(#result-500__l)"
        strokeWidth={0.88}
        d="M161.808 155.192c-7.159 0-12.855-1.572-16.782-6.16-3.944-4.609-6.186-12.353-6.186-24.904 0-12.507 2.242-20.206 6.185-24.782 3.927-4.556 9.622-6.106 16.783-6.106 7.161 0 12.834 1.55 16.738 6.105 3.922 4.576 6.142 12.275 6.142 24.783 0 12.552-2.22 20.296-6.143 24.905-3.905 4.587-9.578 6.159-16.737 6.159Zm0-13.376c1.421 0 2.644-.196 3.664-.755 1.032-.566 1.809-1.476 2.383-2.811 1.131-2.627 1.521-7.008 1.521-14.034 0-7.07-.39-11.495-1.52-14.153-.574-1.35-1.349-2.275-2.381-2.851-1.021-.57-2.245-.772-3.667-.772-1.38 0-2.582.203-3.594.773-1.021.575-1.802 1.498-2.387 2.847-1.152 2.659-1.587 7.083-1.587 14.156 0 7.029.435 11.41 1.588 14.037.586 1.333 1.367 2.242 2.389 2.807 1.011.559 2.212.756 3.591.756Z"
      />
    </g>
    <g filter="url(#result-500__m)">
      <path
        fill="#1F61E8"
        d="M209.035 157.903c-14.092-3.111-21.492-11.233-16.067-35.809 5.406-24.49 15.518-28.657 29.611-25.546 14.092 3.11 21.425 11.128 16.019 35.618-5.425 24.577-15.47 28.848-29.563 25.737Zm3.073-13.921c5.414 1.195 7.625-1.471 10.659-15.22 3.054-13.835 2.19-17.27-3.223-18.465-5.242-1.157-7.644 1.557-10.697 15.392-3.035 13.749-1.981 17.136 3.261 18.293Z"
      />
      <path
        fill="url(#result-500__n)"
        d="M209.035 157.903c-14.092-3.111-21.492-11.233-16.067-35.809 5.406-24.49 15.518-28.657 29.611-25.546 14.092 3.11 21.425 11.128 16.019 35.618-5.425 24.577-15.47 28.848-29.563 25.737Zm3.073-13.921c5.414 1.195 7.625-1.471 10.659-15.22 3.054-13.835 2.19-17.27-3.223-18.465-5.242-1.157-7.644 1.557-10.697 15.392-3.035 13.749-1.981 17.136 3.261 18.293Z"
      />
      <path
        stroke="url(#result-500__o)"
        strokeWidth={0.88}
        d="M209.13 157.473c-6.991-1.543-12.214-4.305-15.059-9.632-2.858-5.351-3.378-13.396-.673-25.652 2.696-12.213 6.545-19.248 11.381-22.866 4.817-3.603 10.712-3.889 17.705-2.345 6.992 1.543 12.198 4.28 15.028 9.569 2.844 5.313 3.352 13.311.656 25.524-2.705 12.257-6.543 19.341-11.367 22.996-4.802 3.638-10.68 3.949-17.671 2.406Zm2.883-13.061c1.388.306 2.624.378 3.741.052 1.129-.33 2.084-1.051 2.933-2.231 1.67-2.321 2.996-6.516 4.51-13.376 1.524-6.904 2.096-11.309 1.566-14.148-.269-1.442-.827-2.512-1.71-3.297-.874-.777-2.026-1.238-3.414-1.545-1.348-.297-2.566-.358-3.677-.02-1.121.342-2.082 1.075-2.944 2.266-1.698 2.348-3.076 6.574-4.601 13.481-1.515 6.864-2.035 11.236-1.475 14.049.285 1.429.852 2.484 1.727 3.256.868.765 1.998 1.216 3.344 1.513Z"
      />
      <path
        stroke="url(#result-500__p)"
        strokeWidth={0.88}
        d="M209.13 157.473c-6.991-1.543-12.214-4.305-15.059-9.632-2.858-5.351-3.378-13.396-.673-25.652 2.696-12.213 6.545-19.248 11.381-22.866 4.817-3.603 10.712-3.889 17.705-2.345 6.992 1.543 12.198 4.28 15.028 9.569 2.844 5.313 3.352 13.311.656 25.524-2.705 12.257-6.543 19.341-11.367 22.996-4.802 3.638-10.68 3.949-17.671 2.406Zm2.883-13.061c1.388.306 2.624.378 3.741.052 1.129-.33 2.084-1.051 2.933-2.231 1.67-2.321 2.996-6.516 4.51-13.376 1.524-6.904 2.096-11.309 1.566-14.148-.269-1.442-.827-2.512-1.71-3.297-.874-.777-2.026-1.238-3.414-1.545-1.348-.297-2.566-.358-3.677-.02-1.121.342-2.082 1.075-2.944 2.266-1.698 2.348-3.076 6.574-4.601 13.481-1.515 6.864-2.035 11.236-1.475 14.049.285 1.429.852 2.484 1.727 3.256.868.765 1.998 1.216 3.344 1.513Z"
      />
    </g>
    <circle cx={77.6} cy={52} r={4} fill="url(#result-500__q)" />
    <circle
      cx={95.2}
      cy={52}
      r={4}
      fill="url(#result-500__r)"
      fillOpacity={0.5}
    />
    <circle
      cx={112.8}
      cy={52}
      r={4}
      fill="url(#result-500__s)"
      fillOpacity={0.5}
    />
    <g filter="url(#result-500__t)">
      <circle cx={268} cy={54.4} r={37.6} fill="url(#result-500__u)" />
      <circle
        cx={268}
        cy={54.4}
        r={37.2}
        stroke="url(#result-500__v)"
        strokeWidth={0.8}
      />
    </g>
    <g filter="url(#result-500__w)">
      <circle cx={268} cy={54.4} r={29.6} fill="#FEBCA2" fillOpacity={0.4} />
    </g>
    <mask id="result-500__z" fill="#fff">
      <path
        fillRule="evenodd"
        d="M268.237 38.4a5.036 5.036 0 0 0-5.011 5.538l1.187 11.87a3.842 3.842 0 0 0 7.648 0l1.187-11.87a5.036 5.036 0 0 0-5.011-5.538Zm0 32a4.173 4.173 0 1 0 .001-8.347 4.173 4.173 0 0 0-.001 8.347Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#1F61E8"
      fillRule="evenodd"
      d="M268.237 38.4a5.036 5.036 0 0 0-5.011 5.538l1.187 11.87a3.842 3.842 0 0 0 7.648 0l1.187-11.87a5.036 5.036 0 0 0-5.011-5.538Zm0 32a4.173 4.173 0 1 0 .001-8.347 4.173 4.173 0 0 0-.001 8.347Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#result-500__x)"
      fillRule="evenodd"
      d="M268.237 38.4a5.036 5.036 0 0 0-5.011 5.538l1.187 11.87a3.842 3.842 0 0 0 7.648 0l1.187-11.87a5.036 5.036 0 0 0-5.011-5.538Zm0 32a4.173 4.173 0 1 0 .001-8.347 4.173 4.173 0 0 0-.001 8.347Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#result-500__y)"
      d="m263.226 43.938-.796.08.796-.08Zm1.187 11.87-.796.08.796-.08Zm7.648 0-.796-.08.796.08Zm1.187-11.87.797.08-.797-.08Zm-9.226-.08a4.236 4.236 0 0 1 4.215-4.658v-1.6a5.836 5.836 0 0 0-5.807 6.417l1.592-.159Zm1.187 11.87-1.187-11.87-1.592.16 1.187 11.87 1.592-.16Zm3.028 2.741a3.042 3.042 0 0 1-3.028-2.74l-1.592.16a4.642 4.642 0 0 0 4.62 4.18v-1.6Zm3.028-2.74a3.042 3.042 0 0 1-3.028 2.74v1.6a4.642 4.642 0 0 0 4.62-4.18l-1.592-.16Zm1.187-11.871-1.187 11.87 1.592.16 1.188-11.87-1.593-.16Zm-4.215-4.658a4.236 4.236 0 0 1 4.215 4.658l1.593.16a5.837 5.837 0 0 0-5.808-6.418v1.6Zm3.374 27.026a3.374 3.374 0 0 1-3.374 3.374v1.6a4.974 4.974 0 0 0 4.974-4.974h-1.6Zm-3.374-3.374a3.374 3.374 0 0 1 3.374 3.374h1.6a4.974 4.974 0 0 0-4.974-4.974v1.6Zm-3.374 3.374a3.374 3.374 0 0 1 3.374-3.374v-1.6a4.974 4.974 0 0 0-4.974 4.974h1.6Zm3.374 3.374a3.374 3.374 0 0 1-3.374-3.374h-1.6a4.974 4.974 0 0 0 4.974 4.974v-1.6Z"
      mask="url(#result-500__z)"
    />
    <path
      fill="url(#result-500__A)"
      d="m263.226 43.938-.796.08.796-.08Zm1.187 11.87-.796.08.796-.08Zm7.648 0-.796-.08.796.08Zm1.187-11.87.797.08-.797-.08Zm-9.226-.08a4.236 4.236 0 0 1 4.215-4.658v-1.6a5.836 5.836 0 0 0-5.807 6.417l1.592-.159Zm1.187 11.87-1.187-11.87-1.592.16 1.187 11.87 1.592-.16Zm3.028 2.741a3.042 3.042 0 0 1-3.028-2.74l-1.592.16a4.642 4.642 0 0 0 4.62 4.18v-1.6Zm3.028-2.74a3.042 3.042 0 0 1-3.028 2.74v1.6a4.642 4.642 0 0 0 4.62-4.18l-1.592-.16Zm1.187-11.871-1.187 11.87 1.592.16 1.188-11.87-1.593-.16Zm-4.215-4.658a4.236 4.236 0 0 1 4.215 4.658l1.593.16a5.837 5.837 0 0 0-5.808-6.418v1.6Zm3.374 27.026a3.374 3.374 0 0 1-3.374 3.374v1.6a4.974 4.974 0 0 0 4.974-4.974h-1.6Zm-3.374-3.374a3.374 3.374 0 0 1 3.374 3.374h1.6a4.974 4.974 0 0 0-4.974-4.974v1.6Zm-3.374 3.374a3.374 3.374 0 0 1 3.374-3.374v-1.6a4.974 4.974 0 0 0-4.974 4.974h1.6Zm3.374 3.374a3.374 3.374 0 0 1-3.374-3.374h-1.6a4.974 4.974 0 0 0 4.974 4.974v-1.6Z"
      mask="url(#result-500__z)"
    />
    <g filter="url(#result-500__B)">
      <mask
        id="result-500__E"
        width={50}
        height={65}
        x={24}
        y={148}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          fill="url(#result-500__C)"
          stroke="url(#result-500__D)"
          strokeWidth={0.8}
          d="m30.225 155.901 36.065-6.597-5.574 23.22-.05.208.146.157 12.437 13.434-1.492 19.724-31.311 5.727a6 6 0 0 1-6.982-4.822l-8.061-44.069a6 6 0 0 1 4.822-6.982Z"
        />
      </mask>
      <g mask="url(#result-500__E)">
        <g filter="url(#result-500__F)">
          <rect
            width={83.964}
            height={57.6}
            x={23.97}
            y={156.639}
            fill="url(#result-500__G)"
            rx={6.4}
            transform="rotate(-10.366 23.97 156.639)"
          />
          <rect
            width={83.164}
            height={56.8}
            x={24.436}
            y={156.96}
            stroke="url(#result-500__H)"
            strokeWidth={0.8}
            rx={6}
            transform="rotate(-10.366 24.436 156.96)"
          />
        </g>
        <rect
          width={16.873}
          height={41.6}
          x={33.172}
          y={163.088}
          fill="#DBE0EA"
          rx={1.6}
          transform="rotate(-10.366 33.172 163.088)"
        />
        <rect
          width={48}
          height={12.8}
          x={52.917}
          y={159.476}
          fill="#DBE0EA"
          rx={1.6}
          transform="rotate(-10.366 52.917 159.476)"
        />
        <rect
          width={27.2}
          height={25.6}
          x={55.796}
          y={175.215}
          fill="#DBE0EA"
          rx={1.6}
          transform="rotate(-10.366 55.796 175.215)"
        />
      </g>
    </g>
    <g filter="url(#result-500__I)">
      <mask
        id="result-500__L"
        width={48}
        height={61}
        x={69}
        y={149}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          fill="url(#result-500__J)"
          stroke="url(#result-500__K)"
          strokeWidth={0.8}
          d="m78.093 187.648.056-.163-.08-.154-8.418-16.153 11.362-21.118 29.934 2.426a6.002 6.002 0 0 1 5.496 6.466l-3.62 44.653a6 6 0 0 1-6.465 5.496l-34.748-2.817 6.483-18.636Z"
        />
      </mask>
      <g mask="url(#result-500__L)">
        <g filter="url(#result-500__M)">
          <rect
            width={83.382}
            height={57.6}
            x={34.328}
            y={145.875}
            fill="url(#result-500__N)"
            rx={6.4}
            transform="rotate(4.634 34.328 145.875)"
          />
          <rect
            width={82.582}
            height={56.8}
            x={34.694}
            y={146.306}
            stroke="url(#result-500__O)"
            strokeWidth={0.8}
            rx={6}
            transform="rotate(4.634 34.694 146.306)"
          />
        </g>
        <rect
          width={44.979}
          height={12.8}
          x={65.577}
          y={156.434}
          fill="#DBE0EA"
          rx={1.6}
          transform="rotate(4.634 65.577 156.434)"
        />
        <rect
          width={27.2}
          height={25.6}
          x={64.284}
          y={172.382}
          fill="#DBE0EA"
          rx={1.6}
          transform="rotate(4.634 64.284 172.382)"
        />
        <rect
          width={15.127}
          height={25.6}
          x={94.585}
          y={174.838}
          fill="#DBE0EA"
          rx={1.6}
          transform="rotate(4.634 94.585 174.838)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="result-500__b"
        x1={51.2}
        x2={51.2}
        y1={40}
        y2={200}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-500__c"
        x1={54.842}
        x2={51.084}
        y1={40}
        y2={199.997}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-500__d"
        x1={70.168}
        x2={65.253}
        y1={26.072}
        y2={185.589}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.017} stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-500__f"
        x1={109.327}
        x2={119.64}
        y1={51.828}
        y2={157.633}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#848EA3" />
        <stop offset={1} stopColor="#ECEEF4" />
      </linearGradient>
      <linearGradient
        id="result-500__g"
        x1={106.544}
        x2={106.691}
        y1={95.911}
        y2={122.009}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F3F7" />
        <stop offset={1} stopColor="#F1F3F7" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__h"
        x1={113.047}
        x2={109.795}
        y1={157.521}
        y2={126.716}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#AAB3C6" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__j"
        x1={169.979}
        x2={169.192}
        y1={48.634}
        y2={156.448}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#848EA3" />
        <stop offset={1} stopColor="#ECEEF4" />
      </linearGradient>
      <linearGradient
        id="result-500__k"
        x1={161.764}
        x2={159.359}
        y1={92.8}
        y2={119.182}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F3F7" />
        <stop offset={1} stopColor="#F1F3F7" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__l"
        x1={161.764}
        x2={161.764}
        y1={155.632}
        y2={124.216}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#AAB3C6" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__n"
        x1={240.077}
        x2={216.07}
        y1={55.182}
        y2={160.292}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#848EA3" />
        <stop offset={1} stopColor="#ECEEF4" />
      </linearGradient>
      <linearGradient
        id="result-500__o"
        x1={222.536}
        x2={214.501}
        y1={96.538}
        y2={121.782}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F3F7" />
        <stop offset={1} stopColor="#F1F3F7" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__p"
        x1={208.992}
        x2={215.764}
        y1={157.894}
        y2={127.216}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#AAB3C6" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__q"
        x1={77.6}
        x2={77.1}
        y1={56}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="result-500__r"
        x1={95.2}
        x2={94.7}
        y1={56}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="result-500__s"
        x1={112.8}
        x2={112.3}
        y1={56}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="result-500__u"
        x1={268}
        x2={268}
        y1={16.8}
        y2={95.581}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-500__v"
        x1={231.631}
        x2={245.678}
        y1={16.8}
        y2={97.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-500__x"
        x1={268.237}
        x2={278.844}
        y1={81.456}
        y2={65.706}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D03E24" />
        <stop offset={1} stopColor="#FC5F3A" />
      </linearGradient>
      <linearGradient
        id="result-500__y"
        x1={262.8}
        x2={270.584}
        y1={58.8}
        y2={58.966}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF0E8" />
        <stop offset={1} stopColor="#FFF0E8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__A"
        x1={272.8}
        x2={269.273}
        y1={50.8}
        y2={50.73}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D03E24" />
        <stop offset={1} stopColor="#D03E24" stopOpacity={0} />
        <stop offset={1} stopColor="#D03E24" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-500__C"
        x1={63.573}
        x2={74.431}
        y1={149.394}
        y2={208.752}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-500__D"
        x1={25.158}
        x2={44.069}
        y1={156.422}
        y2={216.522}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-500__G"
        x1={65.952}
        x2={65.952}
        y1={156.639}
        y2={216.982}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-500__H"
        x1={25.344}
        x2={32.843}
        y1={156.639}
        y2={219.233}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-500__J"
        x1={77.526}
        x2={72.651}
        y1={149.376}
        y2={209.522}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-500__K"
        x1={38.997}
        x2={41.788}
        y1={146.254}
        y2={209.187}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-500__N"
        x1={76.019}
        x2={76.019}
        y1={145.875}
        y2={206.218}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-500__O"
        x1={35.693}
        x2={43.242}
        y1={145.875}
        y2={208.457}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <filter
        id="result-500__a"
        width={246.4}
        height={188.8}
        x={36.8}
        y={32}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={6.4} />
        <feGaussianBlur stdDeviation={7.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.6} />
        <feGaussianBlur stdDeviation={1.6} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_537_174"
          result="effect2_dropShadow_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__e"
        width={61.863}
        height={83.814}
        x={79.792}
        y={85.46}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.88}
          result="effect1_dropShadow_537_174"
        />
        <feOffset dy={0.88} />
        <feGaussianBlur stdDeviation={4.4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__i"
        width={66.088}
        height={82.192}
        x={128.72}
        y={84}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.88}
          result="effect1_dropShadow_537_174"
        />
        <feOffset dy={0.88} />
        <feGaussianBlur stdDeviation={4.4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__m"
        width={68.556}
        height={82.499}
        x={181.504}
        y={86.851}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.88}
          result="effect1_dropShadow_537_174"
        />
        <feOffset dy={0.88} />
        <feGaussianBlur stdDeviation={4.4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__t"
        width={88}
        height={88}
        x={224}
        y={13.6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_537_174"
          result="effect2_dropShadow_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__w"
        width={65.6}
        height={65.6}
        x={235.2}
        y={21.6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__B"
        width={61.444}
        height={76.253}
        x={18.616}
        y={145.6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend
          in2="effect1_dropShadow_537_174"
          result="effect2_dropShadow_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__F"
        width={103.666}
        height={82.476}
        x={18.616}
        y={139.376}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_537_174"
          result="effect2_dropShadow_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__I"
        width={60.464}
        height={72.68}
        x={62.798}
        y={146.44}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend
          in2="effect1_dropShadow_537_174"
          result="effect2_dropShadow_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_174"
          result="shape"
        />
      </filter>
      <filter
        id="result-500__M"
        width={99.571}
        height={75.956}
        x={23.771}
        y={143.171}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_174" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_537_174"
          result="effect2_dropShadow_537_174"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_174"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
