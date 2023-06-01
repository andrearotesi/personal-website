export const handleDownload = () => {
    const fileUrl = '../../../assets/resume/rotesi-2023-swe.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'rotesi-2023-swe.pdf';
    link.target = '_blank';
    link.click();
};
