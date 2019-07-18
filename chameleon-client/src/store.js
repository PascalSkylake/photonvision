import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const set = key => (state,val) =>{
    state[key] = val
};
export const store = new Vuex.Store({

    state:{
        //header
        curr_camera:"",
        curr_pipeline:"",
        cameraList:[],
        pipelineList:[],
        //input
        exposure:54,
        brightness:0,
        orientation:0,
        resolution:0,
        resolutionList:[],
        //threshold
        hue:[0,10],
        saturation:[0,10],
        value:[0,10],
        erode: false,
        dilate: false,
        //contours
        area:[0,100],
        ratio:[0,20],
        extent:[0,100],
        sort_mode:'Largest', //
        target_group:'Single', //
        target_intersection:'Up', //
        //Settings
        teamValue:0,
        connectionType:"DHCP",
        ip:0,
        gateWay:0,
        hostName:"",
        //live info
        streamAdress:("http://"+location.hostname + ":1181/stream.mjpg"),
        isBinaryImage:0,
        //camera lists

    },
    mutations:{
        camera (state,value){
            state['camera'] = value;
            state['pipeline'] = "0";
        },
        pipeline: set('curr_pipeline'),
        brightness: set('brightness'),
        exposure: set('exposure'),
        orientation:set('orientation'),
        resolution: set('resolution'),
        hue: set('hue'),
        saturation: set('saturation'),
        value: set('value'),
        erode: set('erode'),
        dilate: set('dilate'),
        area: set('area'),
        ratio: set('ratio'),
        extent: set('extent'),
        teamValue: set('team_number'),
        connectionType: set('connection_type'),
        ip: set('ip'),
        gateWay : set('gateway'),
        hostName : set('hostname'),
        streamAdress : set('streamAdress'),
        isBinaryImage: set('isBinaryImage'),
        cameraList : set('cameraList'),
        pipelineList: set('piplineList'),
        sort_mode: set('sort_mode'),
        target_group:set('target_group'),
        target_intersection:set('target_intersection')
    },
    getters:{
        camera: state => state.camera,
        pipeline: state => state.pipeline,
        brightness: state => state.brightness,
        exposure: state => state.exposure,
        orientation: state => state.orientation,
        resolution: state => state.resolution,
        hue: state => state.hue,
        saturation: state => state.saturation,
        value: state => state.value,
        erode: state => state.dilate,
        dilate: state => state.dilate,
        area: state =>state.area,
        ratio: state =>state.ratio,
        extent: state =>state.extent,
        teamValue: state => state.teamValue,
        connectionType: state => state.connectionType,
        ip: state => state.ip,
        gateWay: state => state.gateWay,
        hostName: state => state.hostName,
        streamAdress: state => state.streamAdress,
        isBinaryImage: state => state.isBinaryImage,
        cameraList: state => state.cameraList,
        pipelineList: state => state.pipelineList,
        sort_mode: state => state.sort_mode,
        target_group: state => state.target_group,
        target_intersection: state => state.target_intersection


    },
});