import * as React from 'react';

import { colors, statistics } from '../../data';
import { computed, observable } from 'mobx';

import { BarChart } from '../../../../assets/components/charts/bar';
import { Chart } from '../../data/interface.chart';
import { appointmentsData } from '../../../appointments';
import { observer } from 'mobx-react';
import { patientsData } from '../../../patients';
import { treatmentsData } from '../../../treatments';

@observer
class Component extends React.Component<{}, {}> {
	@computed
	get selectedTreatments() {
		const selectedTreatments: {
			treatment: treatmentsData.Treatment;
			male: number;
			female: number;
		}[] = [];
		statistics.selectedAppointments.forEach((appointment) => {
			const i = selectedTreatments.findIndex((t) => t.treatment._id === appointment.treatment._id);
			let male = 0;
			let female = 0;
			if (appointment.patient.gender === patientsData.Gender.female) {
				female++;
			} else {
				male++;
			}

			if (i === -1) {
				// add new
				selectedTreatments.push({
					treatment: appointment.treatment,
					male,
					female
				});
			} else {
				// just increment
				selectedTreatments[i].male = selectedTreatments[i].male + male;
				selectedTreatments[i].female = selectedTreatments[i].female + female;
			}
		});
		return selectedTreatments;
	}
	@computed
	get male() {
		return this.selectedTreatments.map((treatment) => {
			return {
				x: treatmentsData.treatments.getIndexByID(treatment.treatment._id),
				y: treatment.male
			};
		});
	}
	@computed
	get female() {
		return this.selectedTreatments.map((treatment) => ({
			x: treatmentsData.treatments.getIndexByID(treatment.treatment._id),
			y: treatment.female * -1
		}));
	}
	render() {
		return (
			<BarChart
				height={'400px'}
				xLabelsFormatter={(x) => treatmentsData.treatments.list[x].type}
				yLabelsFormatter={(y) => Math.abs(y)}
				horizontal={true}
				showLegend={true}
				hideXAxis={true}
				{...{
					data: [
						{
							key: 'Male',
							color: colors.blue[0],
							values: this.male
						},
						{
							key: 'Female',
							color: colors.purple[0],
							values: this.female
						}
					]
				}}
			/>
		);
	}
}

export const treatmentsByGender: Chart = {
	Component,
	name: 'Treatments by gender',
	description: 'applied treatments by patients gender',
	tags: 'A breakdown of applied treatments by patients gender throughout the selected date',
	className: 'col-xs-12 col-lg-6'
};
