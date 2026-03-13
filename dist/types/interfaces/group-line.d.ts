import { BaseLine, GroupLineDetail } from '../types.js';
/**
 * Group Line
 *
 * @description A line item in a sales transaction
 */
export interface GroupLine extends BaseLine {
    /**
     * Line detail type
     */
    DetailType: 'GroupLineDetail';
    /**
     * Group line details
     */
    GroupLineDetail: GroupLineDetail;
}
