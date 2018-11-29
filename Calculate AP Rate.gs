// Script written by Hannah Strong <stronghannahc@gmail.com> for James Atkins, March 2017
// Last edited: September 17, 2018

/**
 * @OnlyCurrentDoc
 */
// The above tag restricts access to only the connected document, so this script cannot modify any other document in the user’s drive


/**
 * Calculates anticipated payment from insurance company using selected insurance.
 *
 * @param {string} name of insurance company
 * @param {number} position in list (ranked from highest cost to lowest)
 * @param {string} CPT number of current row
 * @param {string} CPT number of row above current row
 * @return The input multiplied by location tax rate.
 * @customfunction
 */



function calculate_AP_percent(ins, pos, CPT, CPT_above) {
    var output = null ;
    switch (ins) {
        
            case '':
            output = 'Select Ins.';
            break;
        
        case 'Aetna':
            output = Aetna_Rate(pos);
            break;
        
        case 'BCBS':
            output = BCBS_Rate(pos, CPT, CPT_above);
            break;
        
        case 'BCBS BAV':
            output = BCBS_BAV_Rate(pos, CPT, CPT_above);
            break;
        
        case 'Cigna':
            output = Cigna_Rate(pos, CPT, CPT_above);
            break;
        
        case 'CommFirst':
            output = CommFirst_Rate(pos, CPT, CPT_above);
            break;
        
        case 'Humana':
            output = Humana_Rate(pos);
            break;
        
        case 'Medicare':
            output = Medicare_Rate(pos, CPT, CPT_above);
            break;
        
        case 'MultiPlan':
            output = MultiPlan_Rate(pos, CPT, CPT_above);
            break;
        
        case 'Oscar':
            output = Oscar_Rate(pos, CPT, CPT_above);
            break;
        
        case 'Tricare':
            output = Tricare_Rate(pos, CPT, CPT_above);
            break;
        
        case 'UHC':
            output = UHC_Rate(pos);
            break;
        
        default:
            output = 'Unrecognized Insurance';
    }
    return (output);
}