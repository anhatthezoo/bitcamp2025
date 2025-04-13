import Svg, { G, Path, Rect, Mask, Defs, ClipPath } from 'react-native-svg'
import { View } from "react-native";
import React, { useState, useEffect } from 'react';

const FolderSVG = () => {
    return (
    <View>
    <Svg
    width={180}
    height={137}
    fill="none"
    >
    <G clipPath="url(#a)">
    <Rect width={180} height={137} fill="#FFEDD4" rx={12} />
    <Path fill="#FFFDF2" d="M8 16a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v12H8V16Z" />
    <Mask
        id="b"
        width={29}
        height={13}
        x={99.5}
        y={15}
        fill="#000"
        maskUnits="userSpaceOnUse"
    >
        <Path fill="#fff" d="M99.5 15h29v13h-29z" />
        <Path d="M99.5 23a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v5h-28v-5Z" />
    </Mask>
    <Path
        fill="#FFF8CB"
        d="M99.5 23a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v5h-28v-5Z"
    />
    <Path
        fill="#CD8742"
        d="M99.5 15h28-28Zm28 13h-28 28Zm-28 0V15v13Zm20-13a9 9 0 0 1 9 9v4h-2v-5c0-4.418-3.134-8-7-8Z"
        mask="url(#b)"
    />
    <Mask
        id="c"
        width={29}
        height={13}
        x={71.5}
        y={15}
        fill="#000"
        maskUnits="userSpaceOnUse"
    >
        <Path fill="#fff" d="M71.5 15h29v13h-29z" />
        <Path d="M71.5 23a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v5h-28v-5Z" />
    </Mask>
    <Path
        fill="#FFF8CC"
        d="M71.5 23a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v5h-28v-5Z"
    />
    <Path
        fill="#CD8742"
        d="M71.5 15h28-28Zm28 13h-28 28Zm-28 0V15v13Zm20-13a9 9 0 0 1 9 9v4h-2v-5c0-4.418-3.134-8-7-8Z"
        mask="url(#c)"
    />
    <Path fill="#DDA15E" d="M0 28h180v109H0z" />
    </G>
    <Defs>
    <ClipPath id="a">
        <Rect width={180} height={137} fill="#fff" rx={12} />
    </ClipPath>
    </Defs>
    </Svg>
    </View>
    );
};

export default FolderSVG;