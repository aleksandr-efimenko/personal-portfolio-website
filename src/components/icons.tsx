type IconProps = React.HTMLAttributes<SVGElement> & {
  fill?: string;
};

export const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill={props.fill || "currentColor"}
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedIn: (props: IconProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill={props.fill || "currentColor"}
        d="M437.016 0H74.983C33.6 0 0 33.601 0 74.984v362.033C0 478.4 33.6 512 74.983 512h362.033C478.4 512 512 478.4 512 437.017V74.984C512 33.601 478.4 0 437.016 0zM164.8 416H89.6V192h75.2v224zm-37.6-256c-20.8 0-37.6-16.8-37.6-37.6s16.8-37.6 37.6-37.6 37.6 16.8 37.6 37.6-16.8 37.6-37.6 37.6zm288 256h-75.2V304c0-28.8-.8-65.6-40-65.6-40 0-46.4 31.2-46.4 63.2V416h-75.2V192h71.2v33.6h1c9.6-18.4 33.6-37.6 69.6-37.6 74.4 0 88 48.8 88 112V416z"
      ></path>
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill={props.fill || "currentColor"}
        d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm-2.5 384.5c-57.5 0-104-46.5-104-104s46.5-104 104-104 104 46.5 104 104-46.5 104-104 104zm-64.5-160h129v-32h-129v32zm0-64h129v-32h-129v32zm0-64h129v-32h-129v32z"
      ></path>
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill={props.fill || "currentColor"}
        d="M0 0v512h512V0H0zm480 480H32V32h448v448z"
      ></path>
      <path
        fill={props.fill || "currentColor"}
        d="M256 256h128v128H256z"
      ></path>
      <path
        fill={props.fill || "currentColor"}
        d="M256 0v128h128V0H256zm0 384h128v128H256z"
      ></path>
      <path fill={props.fill || "currentColor"} d="M0 256h128v128H0z"></path>
    </svg>
  ),

  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  work: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="hsl(var(--foreground))"
        d="M853.333333 256h-170.666666V170.666667c0-47.146667-38.186667-85.333333-85.333334-85.333334h-170.666666c-47.146667 0-85.333333 38.186667-85.333334 85.333334v85.333333H170.666667c-47.146667 0-84.906667 38.186667-84.906667 85.333333L85.333333 810.666667c0 47.146667 38.186667 85.333333 85.333334 85.333333h682.666666c47.146667 0 85.333333-38.186667 85.333334-85.333333V341.333333c0-47.146667-38.186667-85.333333-85.333334-85.333333z m-256 0h-170.666666V170.666667h170.666666v85.333333z"
      />
    </svg>
  ),
  education: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="hsl(var(--foreground))"
        d="M927.889035 428.632267c19.764136-11.073196 31.107485-28.77844 31.118741-48.589648 0.011256-19.817348-11.31879-37.546128-31.095205-48.64286L560.281633 125.151371c-27.001981-15.155165-69.650313-15.136745-96.534614-0.00614L96.116081 331.388503c-19.787672 11.084453-31.129998 28.814256-31.124881 48.63672s11.354606 37.541011 31.107485 48.589648l102.747105 57.648978c-0.065492 0.884137-0.265036 1.728364-0.265036 2.629897l0 274.010701c0 2.029216 0.169869 4.01136 0.49835 5.947456 6.897084 92.851735 161.142074 141.389194 313.029366 141.389194 153.575748 0 309.568545-49.628304 313.193095-144.520511 0.070608-0.927115 0.105401-1.865487 0.105401-2.815115l0-274.010701c0-0.895393-0.198521-1.735527-0.26299-2.615571L927.889035 428.632267zM499.029594 187.981349c1.653663-0.932232 6.251378-2.50403 12.973476-2.50403 5.876847 0 10.755971 1.260713 12.995989 2.51631l342.259084 192.020338L524.986779 572.050678c-1.653663 0.927115-6.251378 2.50403-12.984732 2.50403-5.888104 0-10.768251-1.260713-12.995989-2.51017L156.746974 380.007827 499.029594 187.981349zM753.339604 761.051239c-0.023536 0.49221-0.034792 0.973164-0.047072 1.466398-0.281409 26.673499-92.065835 75.656097-241.185085 75.656097s-240.914932-48.982598-241.202481-75.656097c-0.017396-1.325182-0.105401-2.62785-0.257873-3.917216L270.647093 526.549368 463.74702 634.892935c13.476943 7.565303 30.614252 11.729136 48.25605 11.729136 17.653055 0 34.790364-4.169973 48.25605-11.729136l193.081507-108.329241L753.340627 761.051239z"
      />
      <path
        fill="hsl(var(--foreground))"
        d="M917.789003 458.397175c-19.905352 0-36.033681 16.134469-36.033681 36.033681l0 286.068318c0 19.905352 16.128329 36.033681 36.033681 36.033681s36.033681-16.128329 36.033681-36.033681L953.822684 494.429833C953.822684 474.53062 937.694355 458.397175 917.789003 458.397175z"
      />
    </svg>
  ),
};
