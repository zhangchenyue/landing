export interface Survey {
    wellId: string;
    name?: string;
    wellboreId?: string;
    trajectoryId?: string;
    stationId?: string;
    timeMeasuredDepth?: string;
    bitDepth?: string;
    rop?: string;
    acceptanceState?: number;
    rigState?: string;
    nextSurvey?: Date;
    stationMeasuredDepth?: number;
    inclination?: number;
    azimuth?: number;
    createdOn?: Date;
    alert?: number;
    hasInformation: boolean;
    latitude?: number;
    longitude?: number;
    iconUrl?: string;
    kpiAlert?: number;
}

export interface Well {
    company: string;
    id: string;
    name: string;
    timeZone: string;
}
