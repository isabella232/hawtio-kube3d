/// <reference path="../../includes.d.ts" />
/// <reference path="kube3dInterfaces.d.ts" />
declare var THREE: any;
declare var createGame: any;
declare var terrain: any;
declare var walk: any;
declare var player: any;
declare var createSky: any;
declare var howler: any;
declare var Howl: any;
declare module Kube3d {
    var pluginName: string;
    var log: Logging.Logger;
    var templatePath: string;
    var havePointerLock: boolean;
    var HalfPI: number;
    var QuarterPI: number;
    function rgbToHex(r: any, g: any, b: any): string;
    function randomGrey(): string;
    function webglAvailable(): boolean;
    function getParticles(THREE: any, size: any, color: any, amount: any): any;
    function placeObject(cellX: any, cellY: any, isFloor?: boolean): number[];
    function maybe(): boolean;
}
