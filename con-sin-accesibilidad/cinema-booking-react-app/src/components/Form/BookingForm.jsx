import React, { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import DatePicker from '../DatePicker/DatePicker';
import { provincias } from '../../utils/constants';

const BookingForm = ({ appState }) => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        nombre: '',
        nuevoPassword: ''
    });

    // Convert provincias object to options array
    const provinceOptions = Object.entries(provincias).map(([value, label]) => ({
        value,
        label
    }));

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Validate nombre
        if (!formData.nombre) {
            newErrors.nombre = 'El nombre tiene errores, por favor corregir';
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4}$/.test(formData.nombre)) {
            newErrors.nombre = 'El nombre tiene errores, por favor corregir';
        }

        // Validate password
        if (!formData.nuevoPassword) {
            newErrors.password = 'El nuevo password tiene errores, por favor corregir';
        } else if (!validatePassword(formData.nuevoPassword)) {
            newErrors.password = 'El nuevo password tiene errores, por favor corregir';
        }

        // Validate province
        if (!appState.selectedProvince) {
            newErrors.provincia = 'El cine tiene errores, por favor corregir';
        }

        // Validate date
        if (!appState.selectedDate) {
            newErrors.fecha = 'La fecha tiene errores, por favor corregir';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePassword = (password) => {
        if (password.length < 3) return false;
        
        const firstThree = password.substring(0, 3);
        if (!/^\d{3}$/.test(firstThree)) return false;
        
        const num1 = parseInt(firstThree[0]);
        const num2 = parseInt(firstThree[1]);
        const num3 = parseInt(firstThree[2]);
        
        return (num2 === num1 + 1 && num3 === num2 + 1) || 
               (num2 === num1 - 1 && num3 === num2 - 1);
    };

    // Add a document-level tab key handler
    React.useEffect(() => {
        const handleTabKey = (e) => {
            if (e.key === 'Tab') {
                console.log('Tab key pressed, but navigation is disabled in this example.');
                e.preventDefault();
            }
        };
        
        // Add event listener to the document
        document.addEventListener('keydown', handleTabKey);
        
        // Clean up
        return () => {
            document.removeEventListener('keydown', handleTabKey);
        };
    }, []);

    const handleKeyDown = (e, currentField) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Solo validar el campo actual, no enviar el formulario
            if (currentField === 'nombre') {
                // Validar nombre y mover el foco si es válido
                const valid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4}$/.test(formData.nombre);
                setErrors(prev => ({ ...prev, nombre: valid ? '' : 'El nombre tiene errores, por favor corregir' }));
                if (valid) {
                    document.getElementById('nuevoPassword').focus();
                }
            } else if (currentField === 'nuevoPassword') {
                // Validar password
                const valid = validatePassword(formData.nuevoPassword);
                setErrors(prev => ({ ...prev, password: valid ? '' : 'El nuevo password tiene errores, por favor corregir' }));
            }
        } else if (e.key === 'Tab') {
            // Prevent tab navigation for non-accessible example
            console.log('Tab key pressed, but navigation is disabled in this example.');
            e.preventDefault();
        }
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Create URL with parameters
            const params = new URLSearchParams();
            params.append('nombre', formData.nombre);
            params.append('provincia', appState.selectedProvince);
            if (appState.selectedDate) {
                params.append('fecha', appState.selectedDate.toISOString());
            }
            
            // Redirect with parameters
            window.location.href = `${window.location.pathname}?${params.toString()}`;
        }
    };

    return (
        <div className="form-container">
            <div className="form-group">
                <span className="form-label">Nombre</span>
                <input 
                    type="text" 
                    id="nombre" 
                    className={`form-input ${errors.nombre ? 'error' : ''}`}
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'nombre')}
                    tabIndex="1"
                />
                <span className="input-hint">Para continuar digite Enter.</span>
                <span className="error-message" id="errorNombre">{errors.nombre || ''}</span>
            </div>

            <div className="form-group">
                <span className="form-label">Nuevo Password</span>
                <input 
                    type="password" 
                    id="nuevoPassword" 
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    value={formData.nuevoPassword}
                    onChange={(e) => handleInputChange('nuevoPassword', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'nuevoPassword')}
                    tabIndex="2"
                />
                <span className="input-hint">Para continuar digite Enter.</span>
                <span className="error-message" id="errorPassword">{errors.password || ''}</span>
            </div>

            <div className="form-group">
                <span className="form-label">Cine de su preferencia</span>
                <CustomSelect 
                    options={provinceOptions}
                    selectedValue={appState.selectedProvince}
                    onChange={appState.updateSelectedProvince}
                    hasError={!!errors.provincia}
                />
                <span className="error-message" id="errorProvincia">{errors.provincia || ''}</span>
            </div>

            <div className="form-group">
                <span className="form-label">Fecha</span>
                <DatePicker 
                    selectedDate={appState.selectedDate}
                    currentMonth={appState.currentMonth}
                    currentYear={appState.currentYear}
                    onDateSelect={appState.updateSelectedDate}
                    onNextMonth={appState.nextMonth}
                    onPrevMonth={appState.prevMonth}
                    hasError={!!errors.fecha}
                />
                <div className="selected-date" id="selectedDate">
                    {appState.selectedDate 
                        ? `Fecha seleccionada: ${appState.selectedDate.getDate()} de ${['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][appState.selectedDate.getMonth()]} de ${appState.selectedDate.getFullYear()}`
                        : 'Fecha seleccionada: Ninguna'
                    }
                </div>
                <span className="error-message" id="errorFecha">{errors.fecha || ''}</span>
            </div>

            <div className="form-actions">
                <div className="submit-button" id="submitButton" onClick={handleSubmit}>
                    Enviar
                </div>
            </div>
        </div>
    );
};

export default BookingForm;