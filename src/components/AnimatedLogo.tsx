import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  svgRef: React.Ref<any>;
}

const Path = posed.path({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: 'tween',
        ease: 'easeInOut',
      },
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
});

const Svg = posed.svg({
  visible: {
    opacity: 1,
    staggerChildren: 25,
  },
  hidden: {
    opacity: 0,
  },
});

const SvgComponent = ({ svgRef, ...props }: SvgComponentProps) => {
  const [pose, setPose] = useState('hidden');

  useEffect(() => {
    setPose('visible');
  }, []);

  return (
    <Svg
      pose={pose}
      baseProfile="tiny"
      viewBox="0 0 560 480"
      shapeRendering="crispEdges"
      height="1em"
      width="1.167em"
      ref={svgRef}
      {...props}
    >
      <Path fill="#CB6A92" key="CB6A92M0" d="M0 0h80v80H0z" />
      <Path fill="#C45885" key="C45885M80" d="M80 0h80v80H80z" />
      <Path fill="#C45885" key="C45885M0" d="M0 80h80v80H0z" />
      <Path fill="#BE4577" key="BE4577M160" d="M160 0h80v80h-80z" />
      <Path fill="#BE4577" key="BE4577M0" d="M0 160h80v80H0z" />
      <Path fill="#B8336A" key="B8336AM240" d="M240 0h80v80h-80z" />
      <Path fill="#A82F61" key="A82F61M80" d="M80 240h80v80H80z" />
      <Path fill="#A82F61" key="A82F61M240" d="M240 80h80v80h-80z" />
      <Path fill="#972A57" key="972A57M160" d="M160 240h80v80h-80z" />
      <Path fill="#972A57" key="972A57M240" d="M240 160h80v80h-80z" />
      <Path fill="#86264E" key="86264EM240" d="M240 240h80v80h-80z" />
      <Path fill="#5E544D" key="5E544DM320" d="M320 160h80v80h-80z" />
      <Path fill="#685D56" key="685D56M240" d="M240 320h80v80h-80z" />
      <Path fill="#685D56" key="685D56M400" d="M400 160h80v80h-80z" />
      <Path fill="#72665E" key="72665EM240" d="M240 400h80v80h-80z" />
      <Path fill="#7E736C" key="7E736CM480" d="M480 240h80v80h-80z" />
      <Path fill="#7E736C" key="7E736CM320" d="M320 400h80v80h-80z" />
      <Path fill="#8B817B" key="8B817BM480" d="M480 320h80v80h-80z" />
      <Path fill="#8B817B" key="8B817BM400" d="M400 400h80v80h-80z" />
      <Path fill="#988F89" key="988F89M480" d="M480 400h80v80h-80z" />
    </Svg>
  );
};

const ForwardRef = React.forwardRef<
  SvgComponentProps,
  React.SVGProps<SVGSVGElement>
>((props, ref) => <SvgComponent svgRef={ref} {...props} />);

export default ForwardRef;
